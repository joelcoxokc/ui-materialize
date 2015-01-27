(function () {
    /* jshint camelcase:false */

    module.exports = function($, merge, utils, gulp, options, paths) {
        var jadeFilter    = $.filter('**/*.jade');
        var stylusFilter  = $.filter('**/*.styl');

        return (
            { analyze: function() {
                    var jshint = utils.analyzejshint( paths.client.scripts );
                    var jscs   = utils.analyzejscs( paths.client.scripts );
                    utils.startPlatoVisualizer();
                    return merge(jshint, jscs);   }
            , scripts: function() {
                    return gulp.src(paths.client.scripts)
                        .pipe(  $.concat('app.js')  )
                        .pipe(  gulp.dest(paths.client.build.scriptsPath)  )
                        .pipe(  $.livereload()  )
                        ; }
            , styles: function() {
                    return gulp.src(paths.client.styl.all)
                        .pipe(  $.sourcemaps.init()   )
                        .pipe(  $.plumber()           )
                        .pipe(  $.stylus()            )
                        .pipe(  $.concat('app.css')   )
                        // .pipe(  $.autoprefixer(options.autoPrefix)  )
                        .pipe(  $.plumber.stop()      )
                        .pipe(  $.sourcemaps.write()  )
                        .pipe(  gulp.dest(paths.client.build.stylesPath)  )
                        .pipe(  $.livereload()        )
                        ; }
            , templates: function() {
                    return gulp.src(  paths.client.html  )
                        // .pipe(  jadeFilter  )
                        // .pipe(  $.jade()  )
                        // .pipe(  jadeFilter.restore()  )
                        .pipe(  $.angularTemplatecache('templates.js', {module: 'core',standalone: false,root: 'app/'})  )
                        .pipe(  gulp.dest(paths.client.build.templatesPath)  )
                        .pipe(  $.livereload()  )
                        ; }
            , images: function() {
                    var dest = paths.build + 'content/images';
                    return gulp.src(paths.images)
                        .pipe($.imagemin({ optimizationLevel:3 }))
                        .pipe(gulp.dest(paths.client.build.images))
                        ; }
            , inject: function() {
              var source = gulp.src( paths.client.scripts.concat( paths.client.build.templates, paths.client.css, paths.client.build.styles ) , {read:false}  );
                    return gulp.src(paths.client.index)
                        .pipe(  $.inject(source, { relative:true , ignorePath:'../build' })  )
                        .pipe(  gulp.dest(paths.client.root)       )
                        ; }
            } ); // end return statement

        }; // end function module.exports

    })();
