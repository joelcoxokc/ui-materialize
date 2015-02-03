(function (Vendor) {
    /* jshint camelcase:false */
    var bower      =  require('main-bower-files');
    module.exports = function($, merge, utils, gulp, options, paths) {
        return  {
            js  : function() { return utils.vendor.js( null, paths.build.path);
              },
            css : function() { return utils.vendor.css(null, paths.build.path);
              },
            inject: function() {
                var vendor = gulp.src( bower(), {read:false} );
                return gulp.src( paths.client.index )
                  .pipe($.inject(vendor, {relative:true, name:'inject-vendor', ignorePath:'build'}))
                  .pipe(gulp.dest(paths.client.root))
                  ;
              }
          };
      };
  })();
