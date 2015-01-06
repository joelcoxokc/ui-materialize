(function (Dev) {
    /* jshint camelcase:false */
    var gulp = require('gulp'),
        browserSync = require('browser-sync'),
        del = require('del'),
        glob = require('glob'),
        karma = require('karma').server,
        merge = require('merge-stream'),
        paths = require('../gulp.config.json'),
        plato = require('plato'),
        $ = require('gulp-load-plugins')({lazy:false}),
        reload = browserSync.reload,
        colors = $.util.colors,
        env = $.util.env,
        log = $.util.log,
        utils = require('./utils'),
        _     = require('lodash'),
        bower = require('main-bower-files');
    Dev.vendor = {};
    Dev.libs = {};

    Dev.vendor.js = function() {
        return utils.vendor.js(null, paths.tmp.vendorPath);
    };

    Dev.vendor.css = function() {
        return utils.vendor.css(null, paths.tmp.vendorPath);
    };


    Dev.analyze = function() {
        log('Analyzing source with JSHint, JSCS, and Plato');

        var jshint = utils.analyzejshint([].concat(paths.js, paths.specs, paths.nodejs));
        var jscs = utils.analyzejscs([].concat(paths.js, paths.nodejs));

        utils.startPlatoVisualizer();

        return merge(jshint, jscs);
    };


    Dev.js = function(options) {

        return function (){

            return gulp.src(options.src)
                .pipe($.concat(options.name))
                // .pipe($.ngAnnotate({
                //     add: true,
                //     single_quotes: true
                // }))
                // .pipe($.bytediff.start())
                // .pipe($.uglify({
                //     mangle: true
                // }))
                // .pipe($.bytediff.stop(utils.bytediffFormatter))
                .pipe(gulp.dest(options.dest))
                .pipe($.livereload())
        }
    };
    Dev.coffee = function() {};
    Dev.css = function() {};
    Dev.less = function() {};
    Dev.sass = function() {};
    Dev.styl = function(options) {

        return function (){

            return gulp.src(options.src)
                .pipe($.plumber())
                .pipe($.stylus())
                .pipe($.concat(options.name))
                .pipe($.plumber.stop())
                .pipe(gulp.dest(options.dest))
                .pipe($.livereload())
        }
    };


    Dev.templates = function(options) {
        log('Creating an AngularJS $templateCache');
        return function(){
            return gulp
                .src(options.src)
                // .pipe($.bytediff.start())
                .pipe($.minifyHtml({
                    empty: true
                }))
                // .pipe($.bytediff.stop(utils.bytediffFormatter))
                .pipe($.angularTemplatecache(options.name, options.config))
                .pipe(gulp.dest(options.dest))
                .pipe($.livereload())
        }
    };

    /**
     * Copy fonts
     * @return {Stream}
     */
    Dev.fonts = function() {
        var dest = join(paths.tmp.root, 'fonts');
        log('Copying fonts');
        return gulp
            .src(paths.fonts)
            .pipe(gulp.dest(dest));
    };

    /**
     * Compress images
     * @return {Stream}
     */
    Dev.images = function(){
        var dest = paths.build + 'content/images';
        log('Compressing, caching, and copying images');
        return gulp
            .src(paths.images)
            .pipe($.imagemin({
                optimizationLevel: 3
            }))
            .pipe(gulp.dest('./.tmp/styles/images/'));
    }

    Dev.inject = function() {

        var target     = gulp.src(join(paths.client, 'index.html'));
        var source     = gulp.src([].concat(paths.js, paths.tmp.templates, paths.css, paths.tmp.styles), {read:false});
        var libs       = gulp.src(paths.tmp.libs, {read:false});
        var vendor     = gulp.src(bower(), {read:false});
        return target
            .pipe($.inject(source, {relative:true, ignorePath:'.tmp'}))
            .pipe($.inject(libs, {relative:true, ignorePath:'.tmp', name:'inject-libs'}))
            .pipe($.inject(vendor, {relative:true, ignorePath:'.tmp', name:'inject-vendor'}))
            .pipe(gulp.dest(paths.client));
    };


    Dev.vendor.inject = function() {

        var target     = gulp.src(join(paths.client, 'index.html'));
        var vendor     = gulp.src(bower(), {read:false});
        return target
            .pipe($.inject(vendor, {relative:true, name:'inject-vendor', ignorePath:'.tmp'}))
            .pipe(gulp.dest(paths.client));

    };
    Dev.server = function() {
        require('../src/server/app.js')
    }
    Dev.watch = function() {
        $.livereload()
        $.livereload.listen()
        var css = ['gulpfile.js'].concat(paths.css, paths.styl.all);
        var templates = ['gulpfile.js'].concat(paths.html, paths.jade);
        var js = ['gulpfile.js'].concat(paths.js);

        gulp
            .watch(paths.libs.allStyl,         ['dev:libs:styl'])
            .on('change', logWatch)

        gulp
            .watch(paths.libs.scripts,         ['dev:libs:js'])
            .on('change', logWatch)

        gulp
            .watch(paths.libs.templates,         ['dev:libs:templates'])
            .on('change', logWatch)

        gulp
            .watch(js,         ['dev:js'])
            .on('change', logWatch)
        gulp
            .watch(css,        ['dev:styles'])
            .on('change', logWatch)
        gulp
            .watch(templates,  ['dev:templates'])
            .on('change', logWatch)

        function logWatch(event) {
            log('*** File ' + event.path + ' was ' + event.type + ', running tasks...');
        }
    };

    ///////////////////////////
    // Private Helpers

    function join() {
        return _.map(arguments, function (arg){
            if(arg[arg.length-1] === '/') return arg.slice(0, arg.length-1);
            return arg
        }).join('/');
    }

})(module.exports);