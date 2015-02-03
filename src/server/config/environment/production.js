//////////////////////////////////////////////
///
///     mvvm
///     https://github.com/joelcoxokc/mvvm
///     2014, JoelCox
///
'use strict';

/////////////////////////////
///     Module Dependencies
var express = require('express');
var path    = require('path');

var configuation = {};

/////////////////////////////////
///     @Environment Configuation
///     @NODE_ENV        production
///
module.exports = function(app) {
    app.set('env'    , 'production');
    app.set('config' , configuation);
    process.chdir('./../../');
    app.use('/', express.static('./build/'));
  };
