(function (Client) {
    /* jshint camelcase:false */
    // var merge  =  require('merge-stream');
    // var paths  =  require('../gulp.config.json');
    // var utils  =  require('./utils');
    // var gulp   =  require('gulp');
    // var glob   =  require('glob');
    // var del    =  require('del');
    // var _      =  require('lodash');
    // var $      =  require('gulp-load-plugins')({lazy:false});

    module.exports = function($, merge, utils, gulp, options, paths) {
      var options =
        { autpPrefix  : {browsers:['last 2 versions'],cascade:false}
        , ngTemplates : { module:'core' , standalone:false , root:'app/' }
        };

      return {
        analyze: function() {
            utils.startPlatoVisualizer();
            return merge(utils.analyzejshint( paths.client.scripts), utils.analyzejscs(paths.client.scripts ));
          },
        scripts: function(options) {
            return gulp.src(paths.client.scripts)
                .pipe($.concat('app.js'))
                .pipe(gulp.dest(paths.build))
                ;
          },
        styles: function(options) {
            return gulp.src(paths.client.styl.index)
                .pipe($.sourcemaps.init())
                .pipe($.plumber())
                .pipe($.stylus())
                .pipe($.concat('app.css'))
                .pipe($.autoprefixer(options.autoPrefix))
                .pipe($.plumber.stop())
                .pipe($.sourcemaps.write())
                .pipe(gulp.dest(paths.build + '/content'))
                ;
          },
        templates: function() {
            gulp.src(paths.client.index)
                .pipe(gulp.dest(paths.build));

            var jadeFilter = $.filter('**/*.jade');
            return gulp.src(paths.client.html)
                .pipe(jadeFilter)
                .pipe($.jade())
                .pipe(jadeFilter.restore())
                // .pipe(  $.bytediff.start()  )
                // .pipe(  $.minifyHtml(  {
                //     empty: true
                // }))
                // .pipe(  $.bytediff.stop(utils.bytediffFormatter)  )
                .pipe($.angularTemplatecache('templates.js', options.ngTemplates))
                .pipe(gulp.dest(paths.build))

          },
        images: function() {
            var dest = paths.build + 'content/images';
            return gulp.src(paths.images)
                .pipe($.imagemin({ optimizationLevel:3 }))
                .pipe(gulp.dest(paths.build + '/content/images'))
                ;
          },
        inject: function() {
            var source = gulp.src( [paths.build + '*.js',paths.build + '/content/**/*', ] , {read:false});

            return gulp.src(paths.build + '/index.html')
              .pipe($.inject( source , {relative:true} ))
              .pipe(gulp.dest(paths.build))
              ;
          },
        }
      }

    })(module.exports);
