
(function (Lib) {
    /* jshint camelcase:false */
    // var $          =  require('gulp-load-plugins')({lazy:false});
    // var config     =  require('../gulp.config.json');
    // var merge      =  require('merge-stream');
    // var utils      =  require('./utils');
    // var gulp       =  require('gulp');
    // var nib        =  require('nib');
    // var _          =  require('lodash');

    var options = {  autpPrefix  : {browsers:['last 2 versions'],cascade:false}  };
    options.angularTemplates =
        { module:     'ui.materialize'
        , standalone: false
        , root:       'templates/'
        };

    module.exports = function($, merge, utils, gulp, options, paths) {

        return {
            analize: function () {
                var jshint =  utils.analyzejshint( paths.scripts );
                var jscs   =  utils.analyzejscs( paths.scripts );
                utils.startPlatoVisualizer();
                return merge(jshint, jscs);
              },
            scripts: function() {
                  return gulp.src(paths.lib.scripts)
                    .pipe(  $.concat('ui-materialize.js')  )
                    .pipe(  gulp.dest(paths.build + '/lib')  )
              },
            styles: function() {
                return gulp.src(paths.lib.stylIndex)
                  .pipe(  $.sourcemaps.init()  )
                  .pipe(  $.plumber()  )
                  .pipe(  $.stylus())
                  .pipe(  $.concat('ui-materialize.css')  )
                  .pipe(  $.autoprefixer(options.autpPrefix)  )
                  .pipe(  $.plumber.stop()  ).pipe(  $.sourcemaps.write()  )
                  .pipe(  gulp.dest(paths.build + '/lib')  )
                  ;
              },
            templates: function () {

                var jadeFilter = $.filter('**/*.jade');
                return gulp.src(  [paths.lib.html, paths.lib.jade]  )
                    .pipe(  jadeFilter  )
                    .pipe(  $.jade()  )
                    .pipe(  jadeFilter.restore()  )
                    // .pipe(  $.bytediff.start()  )
                    // .pipe(  $.minifyHtml(  {
                    //     empty: true
                    // }))
                    // .pipe(  $.bytediff.stop(utils.bytediffFormatter)  )
                    .pipe(  $.angularTemplatecache('ui-materialize.templates.js', {module:'ui.materialize', standalone: false}))
                    .pipe(  gulp.dest(paths.build + '/lib')  )
                    ;
              },
            fonts: function() {
                return gulp.src(paths.fonts)
                    .pipe(gulp.dest(paths.build + '/fonts'))
                    .pipe(gulp.dest(paths.build + '/font'));
              },
            inject: function () {
                var target  =  gulp.src(  paths.build + '/index.html'       );
                var source  =  gulp.src(  paths.build + '/lib/**/*',{read:false}  );
                return target
                    .pipe(  $.inject(source, {relative:true, name:'inject-lib'})  )
                    .pipe(  gulp.dest(paths.build))
                    ;
              }
            };
          };
    })(module.exports);
