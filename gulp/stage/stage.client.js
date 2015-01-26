(function (Client) {
    /* jshint camelcase:false */
    var merge  =  require('merge-stream');
    var paths  =  require('../gulp.config.json');
    var utils  =  require('./utils');
    var gulp   =  require('gulp');
    var glob   =  require('glob');
    var del    =  require('del');
    var _      =  require('lodash');
    var $      =  require('gulp-load-plugins')({lazy:false});

    var options = {  autpPrefix  : {browsers:['last 2 versions'],cascade:false}  };
        options.ngTemplates =  {
            module: 'core',
            standalone: false,
            root: 'app/'};

    Client.analyze = function() {
        var jshint = utils.analyzejshint( paths.client.scripts );
        var jscs   = utils.analyzejscs( paths.client.scripts );
        utils.startPlatoVisualizer();
        return merge(jshint, jscs);
    };

    Client.scripts = function(options) {
        return gulp.src(paths.client.scripts)
            .pipe(  $.concat('app.js')  )
            .pipe(  gulp.dest(paths.client.build.scripts)  )
            .pipe(  $.livereload()  )
      };
    Client.styles = function(options) {

        return gulp.src(paths.client.styl)

            .pipe(  $.sourcemaps.init()   )
            .pipe(  $.plumber()           )
            .pipe(  $.stylus()            )
            .pipe(  $.concat('app.css')   )
            .pipe(  $.autoprefixer(autoPrefix)  )
            .pipe(  $.plumber.stop()      )
            .pipe(  $.sourcemaps.write()  )
            .pipe(  gulp.dest(paths.client.build.stylesPath)  )
            .pipe(  $.livereload()        )

      };

    Client.templates = function(options) {
        return function(){
            var jadeFilter = $.filter('**/*.jade');
            return gulp
                .src(  paths.client.html  )
                .pipe(  jadeFilter  )
                .pipe(  $.jade()  )
                .pipe(  jadeFilter.restore()  )
                // .pipe(  $.bytediff.start()  )
                // .pipe(  $.minifyHtml(  {
                //     empty: true
                // }))
                // .pipe(  $.bytediff.stop(utils.bytediffFormatter)  )
                .pipe(  $.angularTemplatecache('templates.js', options.ngTemplates)  )
                .pipe(  gulp.dest(paths.client.build.templatesPath)  )
                .pipe(  $.livereload()  )
        }
      };

    Client.images = function(){
        var dest = paths.build + 'content/images';
        return gulp
            .src(paths.images)
            .pipe($.imagemin({
                optimizationLevel: 3
            }))
            .pipe(gulp.dest(paths.client.build.images));
    }

    Client.inject = function() {

        var target     = gulp.src(paths.client.index);
        var source     = gulp.src([].concat(paths.client.scripts, paths.client.build.templates, paths.client.css, paths.client.build.styles), {read:false});
        return target
            .pipe(  $.inject(source, {relative:true})  )
            .pipe(  gulp.dest(paths.client.root)       );
      };

})(module.exports);