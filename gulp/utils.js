(function (Utils) {
    /* jshint camelcase:false */
    var gulp = require('gulp');
    var browserSync = require('browser-sync');
    var del = require('del');
    var glob = require('glob');
    var karma = require('karma').server;
    var merge = require('merge-stream');
    var paths = require('../paths.json');
    var plato = require('plato');
    var plug = require('gulp-load-plugins')();
    var reload = browserSync.reload;

    var colors = plug.util.colors;
    var env = plug.util.env;
    var log = plug.util.log;
    var port = process.env.PORT || 9000;
    var bower = require('main-bower-files');

    Utils.vendor = {};
    Utils.bower = {};

    /**
     * Execute JSHint on given source files
     * @param  {Array} sources
     * @param  {String} overrideRcFile
     * @return {Stream}
     */
    Utils.analyzejshint = function (sources, overrideRcFile) {
        var jshintrcFile = overrideRcFile || './.jshintrc';
        log('Running JSHint');
        // log(sources);
        return gulp.src(sources)
            .pipe(plug.jshint(jshintrcFile))
            .pipe(plug.jshint.reporter('jshint-stylish'))
            ;  };

    /**
     * Execute JSCS on given source files
     * @param  {Array} sources
     * @return {Stream}
     */
    Utils.analyzejscs = function(sources) { log('Running JSCS');
        return gulp.src(sources)
            .pipe(plug.plumber())
            .pipe(plug.jscs('./.jscsrc'))
            .pipe(plug.plumber.stop())
            ;  };

    /**
     * Start the node server using nodemon.
     * Optionally start the node debugging.
     * @param  {Object} args - debugging arguments
     * @return {Stream}
     */
    Utils.serve = function(args) {
        var options =
            { script: paths.server + 'app.js'
            , delayTime: 1
            , env: { 'NODE_ENV':args.mode , 'PORT':port }
            , watch: ['./src/client/**/*', './src/libs/**/*']
            };
        var exec ;  if (args.debug) {
            log('Running node-inspector. Browse to http://localhost:8080/debug?port=5858');
            exec = require('child_process').exec;
            exec('node-inspector');
            options.nodeArgs = [ args.debug+'=5858' ];  }
        return plug.nodemon(options)
            .on('start', function() { Utils.startBrowserSync(); })
            // .on('change', tasks)
            .on('restart', function(){log('restarted!');  browserSync.reload({ stream: true });})
            ;   };

    /**
     * Start BrowserSync
     */
    Utils.startBrowserSync = function() {
        if (!env.browserSync || browserSync.active) { return; }
        log( 'Starting BrowserSync on port '+port );
        browserSync(
            { proxy      : 'localhost:'+port
            , port       : 3000
            , files      : [paths.client + '/**/*']
            , ghostMode  : { clicks:true , location: true , forms: true , scroll: true } // Default:{t,f,t,t}
            , logLevel   : 'debug'
            , logPrefix  : 'gulp-patterns'
            , notify     : true
            , reloadDelay: 5000
            });   };

    /**
     * Start Plato inspector and visualizer
     */
    Utils.startPlatoVisualizer = function() { log('Running Plato');
        plato.inspect(  glob.sync('./src/client/app/**/*.js')           // files
                     ,  './report/plato'                                // output directory
                     ,  { title  : 'Plato Inspections Report'
                        , exclude:/\/src\/client\/app\/.*\.spec\.js/
                        }                                               // options
                     ,  function(report) {                              // callback on success
                            log(plato.getOverviewReport(report).summary); }
                     );  };

    /**
     * Start the tests using karma.
     * @param  {boolean} singleRun - True means run once and end (CI), or keep running (dev)
     * @param  {Function} done - Callback to fire when karma is done
     * @return {undefined}
     */
    Utils.startTests = function(singleRun, done) {
        var child;
        var excludeFiles = ['./src/client/app/**/*spaghetti.js'];
        var fork = require('child_process').fork;
        if (env.startServers) {
            log('Starting servers');
            var savedEnv = process.env;
            savedEnv.NODE_ENV = 'dev';
            savedEnv.PORT = 8888;
            child = fork('src/server/app.js', childProcessCompleted); }
        else { excludeFiles.push('./src/client/test/midway/**/*.spec.js'); }
        karma.start(
            { configFile: __dirname + '/karma.conf.js'
            , exclude   : excludeFiles
            , singleRun : !!singleRun
            },  karmaCompleted);

        ////////////////

        function childProcessCompleted(error, stdout, stderr) {
            log('stdout: '+stdout);
            log('stderr: '+stderr);
            error && log('exec error: '+error);   }
        function karmaCompleted() {  child && child.kill() ; done();  }
        }; // end function Utils.startTests

    /**
     * Formatter for bytediff to display the size changes after processing
     * @param  {Object} data - byte data
     * @return {String}      Difference in bytes, formatted
     */
    Utils.bytediffFormatter = function(data) {
        return data.fileName+' went from '+(data.startSize/1000).toFixed(2)+
            ' kB to '+(data.endSize/1000).toFixed(2)+' kB, and is '+
            Utils.formatPercent(1-data.percent, 2)+'%'+(data.savings>0 ? ' SMALLER.' : ' BIGGER.');  };

    /**
     * Format a number as a percentage
     * @param  {Number} num       Number to format as a percent
     * @param  {Number} precision Precision of the decimal
     * @return {String}           Formatted percentage
     */
    Utils.formatPercent = function(num, precision) { return (num*100).toFixed(precision); };

    /**
     * Copy the Vendor JavaScript
     * @return {Stream}
     */
    Utils.vendor.js = function(source, dest) { log('Bundling, minifying, and copying the Vendor JavaScript');
        return gulp.src(source || bower())                    // source
            .pipe(plug.filter(['**/*.js', '**/*.min.js']))    // vendor filter
            .pipe(plug.concat('vendor.min.js'))
            .pipe(plug.bytediff.start())
            .pipe(plug.uglify())
            .pipe(plug.bytediff.stop(Utils.bytediffFormatter))
            .pipe(gulp.dest(  dest || paths.build  ))         // destination
            ;  };

    /**
     * Minify and bundle the Vendor CSS
     * @return {Stream}
     */
    Utils.vendor.css = function(source, dest) { log('Compressing, bundling, copying vendor CSS');
        return gulp.src(  source || bower()  )                    // source
            .pipe(plug.filter(['**/*.css'])                       // vendor filter
            .pipe(plug.concat('vendor.min.css'))
            .pipe(plug.bytediff.start())
            .pipe(plug.minifyCss({}))
            .pipe(plug.bytediff.stop(Utils.bytediffFormatter))
            .pipe(gulp.dest(  dest || paths.build+'content'  ))   // destination
            ;  };

    })(module.exports);
