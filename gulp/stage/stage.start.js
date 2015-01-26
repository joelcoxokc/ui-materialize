(function (Dev) {
    /* jshint camelcase:false */
    var $            =  require('gulp-load-plugins')({lazy:false});
    var _            =  require('lodash');
    var log          =  $.util.log;
    var gulp         =  require('gulp');
    var utils        =  require('./utils');
    var merge        =  require('merge-stream');
    var paths        =  require('../gulp.config.json');


    Dev.server = function() {
        require('../src/server/app.js')
    };

    Dev.watch = function() {
        $.livereload()
        $.livereload.listen()
        var css = [].concat(paths.client.css, paths.styl.all);
        var templates = ['gulpfile.js'].concat(paths.client.html, paths.client.jade);
        var js = ['gulpfile.js'].concat(paths.client.scripts);

        gulp
            .watch(  paths.lib.styl,         ['dev:lib:styles']  )
            .on('change', logWatch);
        gulp
            .watch(  paths.lib.scripts,      ['dev:libs:js']  )
            .on('change', logWatch);
        gulp
            .watch(  paths.libs.templates,         ['dev:libs:templates']  )
            .on('change', logWatch);

        gulp
            .watch(  js,         ['dev:client:scripts']  )
            .on('change', logWatch);
        gulp
            .watch(  css,        ['dev:client:styles']  )
            .on('change', logWatch);
        gulp
            .watch(  templates,  ['dev:client:templates']  )
            .on('change', logWatch)

        function logWatch(event) {
            log('*** File ' + event.path + ' was ' + event.type + ', running tasks...');
        }
    };

    ///////////////////////////
    // Private Helpers

    function join() {
        return _.map(arguments, function (arg){
            if(arg[arg.length-1] === '/') return arg.slice(0, arg.length-1);
            return arg
        }).join('/');
    }

})(module.exports);