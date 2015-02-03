(function () {
    /* jshint camelcase:false */

    module.exports = function($, merge, utils, gulp, options, paths) {
        var jadeFilter = $.filter('**/*.jade');
        var options = configuration()
        return  {

            analyze: function() {
                      var jshint =  utils.analyzejshint( paths.lib.scripts );
                      var jscs   =  utils.analyzejscs( paths.lib.scripts );
                      utils.startPlatoVisualizer();
                      return merge(jshint, jscs);
              },
            scripts: function(options) {
                return gulp.src(paths.lib.scripts)
                  .pipe(  $.concat('ui-materialize.js')  )
                  .pipe(  gulp.dest(paths.lib.build.scriptsPath)  )
                  .pipe(  $.livereload()  )
                  ;
              },
            styles: function() {
                return gulp.src(paths.lib.stylIndex)
                  .pipe(  $.sourcemaps.init()  )
                  .pipe(  $.plumber()  )
                  .pipe(  $.stylus()  )
                  .pipe(  $.concat('ui-materialize.css')  )
                  .pipe(  $.autoprefixer(options.autpPrefix)  )
                  .pipe(  $.plumber.stop()  )
                  .pipe(  $.sourcemaps.write()  )
                  .pipe(  gulp.dest(paths.lib.build.stylesPath)  )
                  .pipe(  $.livereload()  );
                  ;
              },
            templates: function() {
                return gulp.src(  paths.lib.html )
                   // .pipe(  jadeFilter  )
                   // .pipe(  $.jade()  )
                   // .pipe(  jadeFilter.restore()  )
                   .pipe(  $.angularTemplatecache('ui-materialize.templates.js', {module:'ui.materialize', standalone: false}))
                   .pipe(  gulp.dest(paths.lib.build.templatesPath)  )
                   .pipe(  $.livereload()  )
                   ;
              },
            fonts: function() {
                return gulp.src(   paths.fonts   )
                  .pipe(  gulp.dest(paths.lib.build.fonts)  )
                  ;
              },
            inject: function() {
                var source = gulp.src(
                  [ paths.lib.build.scripts, paths.lib.build.styles, paths.lib.build.templates]
                  ,  {read:false}
                  );
                return gulp.src(  paths.client.index  )
                  .pipe(  $.inject(source, {relative:true, name:'inject-lib', ignorePath:'../build'})  )
                  .pipe(  gulp.dest(paths.client.root)  )
                  ;
              }
          }; // end return statement

        function configuration() {
            return  { autpPrefix: { browsers:['last 2 versions'] , cascade:false }
                    , templateName: ''
                    , ngTemplate: { module:'ui.materialize' , standalone: true , /*root:'templates/'*/ }
                    };   }
      }; // end function module.exports
  })();
