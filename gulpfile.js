(function (){

    /* jshint camelcase:false */
    'use strict';

    var gulp = require('gulp');
    var $    =  require('gulp-load-plugins')({lazy:false});

    var tasks = require('./gulp/index');
    var dev   = tasks.dev;
    var stage = tasks.stage;

//  ####  DEV  #####

                                        /*======  DEV  ======*/
    gulp                                /*=====================*/
        .task(  'dev'  ,
            $.sequence(
                'dev:lib',
                'dev:vendor',
                'dev:client',
                'dev:start'
                )  );

/*======================================================================== DEV START
*/  gulp
        .task(  'dev:server'  ,  dev.start.server  )
        .task(  'dev:watch'   ,  dev.start.watch   )
        .task(  'dev:start'   ,  $.sequence(
                                    'dev:watch'   ,
                                    'dev:server'  )  );


/*======================================================================== DEV VENDOR
*/  gulp
        .task(  'dev:vendor:styles'   ,  dev.vendor.styles   )
        .task(  'dev:vendor:scripts'  ,  dev.vendor.scripts  )
        .task(  'dev:vendor:inject'   ,  dev.vendor.inject   )
        .task(  'dev:vendor'          ,  $.sequence(
                                            'dev:vendor:styles'   ,
                                            'dev:vendor:scripts'  ,
                                            'dev:vendor:inject'   )  );


/*======================================================================== DEV LIB
*/  gulp
        .task(  'dev:lib:templates'  ,  dev.lib.templates  )
        .task(  'dev:lib:scripts'    ,  dev.lib.scripts    )
        .task(  'dev:lib:analyze'    ,  dev.lib.analyze    )
        .task(  'dev:lib:styles'     ,  dev.lib.styles     )
        .task(  'dev:lib:inject'     ,  dev.lib.inject     )
        .task(  'dev:lib:fonts'      ,  dev.lib.fonts      )
        .task(  'dev:lib'            ,  $.sequence(
                                            'dev:lib:templates'  ,
                                            'dev:lib:scripts'    ,
                                            'dev:lib:analyze'    ,
                                            'dev:lib:styles'     ,
                                            'dev:lib:inject'     )  );

/*======================================================================== DEV CLIENT
*/  gulp
        .task(  'dev:client:templates'  ,  dev.client.templates  )
        .task(  'dev:client:analyze'    ,  dev.client.analyze    )
        .task(  'dev:client:scripts'    ,  dev.client.scripts    )
        .task(  'dev:client:styles'     ,  dev.client.styles     )
        .task(  'dev:client:inject'     ,  dev.client.inject     )
        .task(  'dev:client:images'     ,  dev.client.images     )
        .task(  'dev:client'            ,  $.sequence(
                                               'dev:client:templates'  ,
                                               // 'dev:client:analyze'    ,
                                               'dev:client:scripts'    ,
                                               'dev:client:styles'     ,
                                               'dev:client:images'     ,
                                               'dev:client:inject'     )  );

// //  ####  STAGE  #####

//                                         /*======  STAGE  ======*/
//     gulp                                /*=====================*/
//         .task(  'stage'  ,
//             $.sequence(
//                 'stage:lib',
//                 'stage:vendor'
//                 // 'stage:client'  ,
//                 // 'stage:start'
//                 )  );


// /*======================================================================== STAGE START
// */  gulp
//         .task(  'stage:server'  ,  stage.server  )
//         .task(  'stage:watch'   ,  stage.watch   )
//         .task(  'stage:start'   ,  $.sequence(
//                                     'stage:watch'   ,
//                                     'stage:server'  )  );


// /*======================================================================== STAGE VENDOR
// */  gulp
//         .task(  'stage:vendor:styles'   ,  stage.vendor.styles   )
//         .task(  'stage:vendor:scripts'  ,  stage.vendor.scripts  )
//         .task(  'stage:vendor:inject'   ,  stage.vendor.inject   )
//         .task(  'stage:vendor'          ,  $.sequence(
//                                             'stage:vendor:styles'   ,
//                                             'stage:vendor:scripts'  ,
//                                             'stage:vendor:inject'   )  );


// /*======================================================================== STAGE LIB
// */  gulp
//         .task(  'stage:lib:templates'  ,  stage.lib.templates  )
//         .task(  'stage:lib:scripts'    ,  stage.lib.scripts    )
//         .task(  'stage:lib:analyze'    ,  stage.lib.analyze    )
//         .task(  'stage:lib:styles'     ,  stage.lib.styles     )
//         .task(  'stage:lib:inject'     ,  stage.lib.inject     )
//         .task(  'stage:lib:fonts'      ,  stage.lib.fonts      )
//         .task(  'stage:lib'            ,  $.sequence(
//                                             'stage:lib:templates'  ,
//                                             'stage:lib:scripts'    ,
//                                             'stage:lib:analyze'    ,
//                                             'stage:lib:styles'     ,
//                                             'stage:lib:inject'     )  );


// /*======================================================================== STAGE CLIENT
// */  gulp
//         .task(  'stage:client:templates'  ,  stage.client.templates  )
//         .task(  'stage:client:analyze'    ,  stage.client.analyze    )
//         .task(  'stage:client:scripts'    ,  stage.client.scripts    )
//         .task(  'stage:client:styles'     ,  stage.client.styles     )
//         .task(  'stage:client:inject'     ,  stage.client.inject     )
//         .task(  'stage:client'            ,  $.sequence(
//                                                'stage:client:templates'  ,
//                                                'stage:client:analyze'    ,
//                                                'stage:client:scripts'    ,
//                                                'stage:client:styles'     ,
//                                                'stage:client:inject'     )  );

    // //  ####  DEPLOY  #####

    //                                     /*======  DEPLOY  =====*/
    // gulp                                /*=====================*/
    //     .task(  'deploy'  ,
    //         $.sequence(
    //             'deploy:lib'     ,
    //             'deploy:client'  ,
    //             'deploy:vendor'  ,
    //             'deploy:start'   )  );


    // gulp                                                                /***  DEPLOY START  ***/
    //     .task(  'deploy:server'  ,  deploy.server  )
    //     .task(  'deploy:watch'   ,  deploy.watch   )
    //     .task(  'deploy:start'   ,  $.sequence(
    //                                 'deploy:watch'   ,
    //                                 'deploy:server'  )  );


    // gulp                                                                /***  DEPLOY VENDOR  ***/
    //     .task(  'deploy:vendor:concat'  ,  deploy.vendor.templates  )
    //     .task(  'deploy:vendor:inject'  ,  deploy.vendor.styles     )
    //     .task(  'deploy:vendor'         ,  $.sequence(
    //                                         'deploy:vendor:concat'  ,
    //                                         'deploy:client:inject'  )  );


    // gulp                                                                /***  DEPLOY LIB  ***/
    //     .task(  'deploy:lib:templates'  ,  deploy.lib.templates  )
    //     .task(  'deploy:lib:scripts'    ,  deploy.lib.scripts    )
    //     .task(  'deploy:lib:styles'     ,  deploy.lib.styles     )
    //     .task(  'deploy:lib:inject'     ,  deploy.lib.inject     )
    //     .task(  'deploy:lib'            ,  $.sequence(
    //                                         'deploy:lib:templates'  ,
    //                                         'deploy:lib:scripts'    ,
    //                                         'deploy:lib:styles'     ,
    //                                         'deploy:lib:inject'     )  );


    // gulp                                                                /***  DEPLOY CLIENT  ***/
    //     .task(  'deploy:client:templates'  ,  deploy.client.templates  )
    //     .task(  'deploy:client:scripts'    ,  deploy.client.scripts    )
    //     .task(  'deploy:client:styles'     ,  deploy.client.styles     )
    //     .task(  'deploy:client'            ,  $.sequence(
    //                                            'deploy:client:templates'  ,
    //                                            'deploy:client:scripts'    ,
    //                                            'deploy:client:styles'     )  );


})();