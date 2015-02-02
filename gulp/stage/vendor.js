(function () {
    /* jshint camelcase:false */
    // var $          =  require('gulp-load-plugins')({lazy:false});
    // var config     =  require('../gulp.config.json');
    // var merge      =  require('merge-stream');
    // var utils      =  require('./utils');
    // var gulp       =  require('gulp');
    // var nib        =  require('nib');
    // var _          =  require('lodash');
    var bower      =  require('main-bower-files');

    module.exports = function($, merge, utils, gulp, options, paths) {
        var options = {  autpPrefix : {browsers:['last 2 versions'],cascade:false}  };
        return {
            scripts: function() {
                return utils.vendor.js(bower(), paths.build + '/vendor' );
              },
            styles: function () {
                return utils.vendor.css(bower(), paths.build + '/vendor');
              },
            inject: function() {
                var vendor = gulp.src(paths.build +'/vendor/**/*', {read:false})
                return gulp.src(paths.build + '/index.html')
                  .pipe(  $.inject(  vendor/*vendor*/
                      , {relative:true, name:'inject-vendor', ignorePath:'../../build'})  )
                  .pipe(gulp.dest(paths.build))
                  ;
              }

          }
      };

    })();
