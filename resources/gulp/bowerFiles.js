(function () {
    var fs = require('fs');
    var _f = require('fs-utils');
    var _  = require('lodash');
    var paths = require('../gulp.config');
    var path  = require('path');
    var rootDir = path.resolve(__dirname, '../');

    var bower = new Bower();
    module.exports = bower;
    module.exports.Bower = Bower;

    function Bower() {
        var _this = this;
        _this.rc         = _f.readJSONSync('.bowerrc');
        _this.root       = join(rootDir, _this.rc.directory);
        _this.components = paths.bowerFiles;

        _this.forEachConfig = function(cb){
            _.forEach(  _this.components
                     ,  function (comp){
                            var main = _f.readJSONSync( join(_this.root, comp, 'bower.json') ).main;
                            if(_.isArray(main)){
                                _.forEach(main, function (dir) { cb(join(_this.root, comp, dir)) });   }
                            else { cb(join(_this.root, comp, main)); }
                            }
                     );
          }
      };

    Bower.prototype.main = function(components) {
        this.components = components || this.components;
        var bowerConfigs = [];
        this.forEachConfig( function (config){ bowerConfigs.push(config) });
        return bowerConfigs;
    };

    // Private Methods

    function join() {
        return _.map(arguments, function (arg) { return arg.replace(/^\.|\/$/g, ''); }).join('/');   }

  })();
