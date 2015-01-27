
(function (Vendor) {
    /* jshint camelcase:false */
    var $          =  require('gulp-load-plugins')({lazy:false});
    var config     =  require('../gulp.config.json');
    var merge      =  require('merge-stream');
    var utils      =  require('./utils');
    var gulp       =  require('gulp');
    var nib        =  require('nib');
    var _          =  require('lodash');
    var bower      =  require('main-bower-files');

    var options = {  autpPrefix : {browsers:['last 2 versions'],cascade:false}  };
    var paths = config.vendor;

    Vendor.js     = function() { return utils.vendor.js(null, paths.build.path ); };
    Vendor.css    = function() { return utils.vendor.css(null, paths.build.path); };
    Vendor.inject = function()
          { return gulp.src(config.client.index)
              .pipe(  $.inject(  gulp.src(bower(), {read:false})/*vendor*/
                  , {relative:true, name:'inject-vendor', ignorePath:'build'})  )
              .pipe(gulp.dest(config.client.root))
              ;
          };

    })(module.exports);
