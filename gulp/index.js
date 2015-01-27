(function (Tasks) {
    var $          =  require('gulp-load-plugins')({lazy:false});
    var paths      =  require('../paths.json');
    var join       =  require('path').join;
    var merge      =  require('merge-stream');
    var utils      =  require('./utils');
    var gulp       =  require('gulp');
    var nib        =  require('nib');

    Tasks.dev =
        { lib    : use('dev','lib'   )
        , client : use('dev','client')
        , start  : use('dev','start' )
        , vendor : use('dev','vendor')
        };
    Tasks.stage = {};
        // { lib    :  require('./stage/stage.lib'   )
        // , clent  :  require('./stage/stage.client')
        // , start  :  require('./stage/stage.start' )
        // , vendor :  require('./stage/stage.vendor')
        // };
    Tasks.deploy = {}; // { lib : require('./stage/stage.lib') };

    function use(task, name) {
        return require(join(__dirname, task, name+'.js'))($, merge, utils, gulp, options(task, name), paths);  }
    function options(task, name) {
        // Given a task ('dev') and a name ('lib' | 'client' | 'vendor' ),
        // return options obj configured to the purpose { autoprefix:{..}, templateName:{..}, ..}
        return (
            { dev:
                { lib:
                    { autpPrefix:
                        { browsers: ['last 2 versions']
                        , cascade:  false
                        }
                    , templateName:
                        'ui-materialize.templates.js'
                    , ngTemplate:
                        { module:     'ui.materialize'
                        , standalone: false
                        , root:       'templates/'
                        }
                    }
                , client:
                    { autpPrefix:
                        { browsers: ['last 2 versions']
                        , cascade:  false
                        }
                    , ngTemplates:
                        { module:     'core'
                        , standalone: false
                        , root:       'app/'
                        }
                    }
                , vendor:
                    { autpPrefix:
                        { browsers: ['last 2 versions']
                        , cascade:  false
                        }
                    }
                }
            }[task][name]  );  };

    })(module.exports);
