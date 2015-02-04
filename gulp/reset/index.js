(function(){

  module.exports = function($, gulp, paths) {

       var tasks = {
         index: index,
         clear: clear
       };

       var opts = {
          inject: {
            head: {
              starttag: '<!-- HEAD -->',
              endtag: '<!-- END:HEAD -->',
              transform: transform
            },
            body: {
              starttag: '<!-- BODY -->',
              endtag: '<!-- END:BODY -->',
              transform: transform
            }
          }
        };

      return tasks;
      function index() {
          return inject('./gulp/reset/head.html', './gulp/reset/body.html')
        }
      function clear() {
          return inject('./gulp/reset/blank.html', './gulp/reset/blank.html')
        }

      function inject(headPath, bodyPath) {
            var head = gulp.src(headPath);
            var body = gulp.src(bodyPath);
            return gulp.src(paths.client.index)
              .pipe( $.inject(head, opts.inject.head))
              .pipe( $.inject(body, opts.inject.body))
              .pipe(gulp.dest(paths.client.root))
         }

      function transform(filePath, file) {
          return file.contents.toString('utf8');
        }
    };

})()