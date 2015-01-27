(function () {
    /* jshint camelcase:false */
    module.exports = function($, merge, utils, gulp, options, paths) {
        return (
            { server: function() { require('../../src/server/app.js') }
            , watch:  function() {
                console.log('watching');
                $.livereload();
                $.livereload.listen();
                var templates = paths.client.html;
                var js        = [].concat(paths.client.scripts);
                var css       = [].concat(paths.client.css, paths.client.styl.all);
                gulp.watch( paths.lib.styl    , ['dev:lib:styles'                    ] ).on('change', logWatch);
                gulp.watch( paths.lib.scripts , ['dev:lib:analyze', 'dev:lib:scripts'] ).on('change', logWatch);
                gulp.watch( paths.lib.html    , ['dev:lib:templates'                 ] ).on('change', logWatch);
                gulp.watch( js                , ['dev:client:scripts'                ] ).on('change', logWatch);
                gulp.watch( css               , ['dev:client:styles'                 ] ).on('change', logWatch);
                gulp.watch( paths.client.html , ['dev:client:templates'              ] ).on('change', logWatch);
                function logWatch(event) {
                    console.log('*** File ' + event.path + ' was ' + event.type + ', running tasks...');
                } }
            } );
    })();
