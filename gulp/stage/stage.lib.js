
(function (Lib) {
    /* jshint camelcase:false */
    var $          =  require('gulp-load-plugins')({lazy:false});
    var config     =  require('../gulp.config.json');
    var merge      =  require('merge-stream');
    var utils      =  require('./utils');
    var gulp       =  require('gulp');
    var nib        =  require('nib');
    var _          =  require('lodash');

    var options = {  autpPrefix  : {browsers:['last 2 versions'],cascade:false}  };
    var paths = config.lib;

    options.angularTemplates =  {
            module:'ui.materialize',
            standalone: false,
            root:'templates/',


    Lib.analyze = function() {
        var jshint =  utils.analyzejshint( paths.scripts );
        var jscs   =  utils.analyzejscs( paths.scripts );

        utils.startPlatoVisualizer();
        return merge(jshint, jscs);
      };

    Lib.scripts = function(options) {

        return gulp.src(paths.scripts)
            .pipe(  $.concat('ui-materialize.js')  )
            .pipe(  gulp.dest(paths.build.scriptsPath)  )
            .pipe(  $.livereload()  )
      };

    Lib.styles = function() {
        return gulp.src(paths.stylIndex)

            .pipe(  $.sourcemaps.init()  ).pipe(  $.plumber()  )

                .pipe(  $.stylus())
                .pipe(  $.concat('ui-materialize.css')  )
                .pipe(  $.autoprefixer(options.autpPrefix)  )

            .pipe(  $.plumber.stop()  ).pipe(  $.sourcemaps.write()  )
            .pipe(  gulp.dest(paths.build.stylesPath)  )
            .pipe(  $.livereload()  );
      };

    Lib.templates = function() {

        var jadeFilter = $.filter('**/*.jade');
        return gulp
            .src(  [paths.html, paths.jade]  )

            .pipe(  jadeFilter  )
            .pipe(  $.jade()  )
            .pipe(  jadeFilter.restore()  )
            // .pipe(  $.bytediff.start()  )
            // .pipe(  $.minifyHtml(  {
            //     empty: true
            // }))
            // .pipe(  $.bytediff.stop(utils.bytediffFormatter)  )
            .pipe(  $.angularTemplatecache('ui-materialize.templates.js', options.angularTemplates)  )
            .pipe(  gulp.dest(paths.build.templatesPath)  )
            .pipe(  $.livereload()  )
      };

    Lib.fonts = function() {
        return gulp
            .src(config.fonts)
            .pipe(  gulp.dest(paths.build.fonts)  );
      };

    Lib.inject = function() {

        var target  =  gulp.src(  config.client.index               );
        var source  =  gulp.src(  paths.build.scripts,{read:false}  );
        var styles  =  gulp.src(  paths.build.styles, {read:false}  );
        return target
            .pipe(  $.inject(source, {relative:true, name:'inject-lib'})  )
            .pipe(  $.inject(styles, {relative:true, name:'inject-lib'})  )
            .pipe(  gulp.dest(config.client.root))  ;
      };

})(module.exports);