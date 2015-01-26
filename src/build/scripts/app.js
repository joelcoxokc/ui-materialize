;(function() {
    'use strict';

    angular
        .module('app', [
            'ngAnimate',
            'ngSanitize',
            'ui.router',
            'btford.markdown',
            'hljs',
            'ui.materialize',
            'core',
            'app.modules'
        ]);

}).call(this);
/* global jQuery:false, TimelineLite:false, TweenMax:false, Cubic:false */
jQuery(document).ready(function() {

    'use strict';

    var $nav        = $('.io-nav'),
    $intro     = $('.intro'),
    $inner     = $('.intro-inner'),
    $introTitle = $intro.find('h1'),
    $navInner  = $('.io-nav-inner'),
    $navHeader = $navInner.find('.io-nav-header'),
    $userIcon  = $('.userIcon'),
    $navText   = $('.io-nav-text > *'),

    $title     = $('.io-title'),
    $title1    = $('.io-title > h1'),

    $navigation = $('.io-navigation'),
    $navigationItem   = $navigation.find('.io-navigation-item'),
    $navigationActive = $navigation.find('.io-navigation-item.active'),
    $navigationText   = $navigation.find('.io-navigation-item-text'),
    $navigationIcon   = $navigationItem.find('i'),
    $content = $('.io-content');

    var time = new TimelineLite();

    time
        .add(title)
        .to($nav, 0, {autoAlpha:1, delay:4.7})
        .from($nav, 1, {y:'-100%', delay:1}) // 1 sec
        .from($navInner, 0.5, {x: '-100%'})
        .from($navHeader, 1, {width:0}, 1)
        // .from($userIcon, 0.5, {width:0, height:0, autoAlpha:0, rotation:180}, 1)
        .staggerFrom($navText, 0.5, {autoAlpha:0, rotationX:180}, 0.2)

        .from($navigation, 1, {x:'-100%'}, 1)
        .staggerFrom($navigationIcon, 0.5, {rotation:'270deg', autoAlpha:0}, 0.1)
        .from($navigationText, 0.5, {autoAlpha:0, marginLeft:'-20px'})
        .from($navigationActive, 0.5, {background:'rgba(0,0,0,0)'})
        .from($content, 1, {x:100, autoAlpha:0}, 6);

    function title() {
        var tl = new TimelineLite();
        tl
            .to($inner, 1, {width:'200px',
                height:'200px',
                marginLeft: '-100px',
                marginTop: '-100px',
                delay:0.5})
            .to($inner, 1, {borderRadius:'0px'}, 1)
            .to($inner, 1, {width:'400px', marginLeft:'-200px'}, 1.5)
            .to($introTitle, 1, {autoAlpha:1}, 1.7)
            .to($introTitle, 1, {autoAlpha:0, delay:1})
            .to($inner, 1, {rotation:'360deg',
                left:'0px',
                top:'0px',
                marginLeft:'0',
                marginTop:'0',
                width:'250px',
                height:'10px'}, 4.5)
            .to($inner, 1, {autoAlpha:0}, 5)
            .to($intro, 0, {display:'none'});
    }

    function navigation() {
        var tl = new TimelineLite();
        return tl
            .from($navigation, 1, {width:0})
            .staggerFrom($navigationIcon, 0.5, {rotation:'270deg', autoAlpha:0}, 0.1)
            .from($navigationText, 0.5, {autoAlpha:0, marginLeft:'-20px'}, 0.3)
            .from($navigationActive, 0.5, {background:'rgba(0,0,0,0)'}, 0);
    }

});

;(function() {
    'use strict';

    angular.module('core', [
        'duScroll',
        'ngAnimate',
        'ui.router',
        'ngSanitize',
        'ngplus'
    ]);

}).call(this);
;(function() {
    'use strict';

    angular
        .module('app.modules', [
            'gettingStarted',
            'components'
        ]);

}).call(this);
;(function() {

    'use strict';

    angular
        .module('core')
        .factory('User', User);

    /* @inject */
    function User($http) {

        // Define Private Variables
        var api = join('/api', 'users');

        // Define the public api
        var instance = {
            all: all,
            one: one,
            create: create,
            update: update,
            destroy: destroy
        };
        return instance;

        ////////////////

        /**
         * one                         |  description.
         * @return {Promise}  |  $http |  promise a collection of all models.
         */
        function all () {
            return $http.get(api);
        }

        /**
         * one                         |  description.
         * @param  {Integer}  |  id    |  requested model id
         * @return {Promise}  |  $http |  promise a single instance of the requested model.
         */
        function one (id) {
            return $http.get(join(api, id));
        }

        /**
         * create                      |  description.
         * @param  {Object}   |  data  |  data for creating a new model.
         * @return {Promise}  |  $http |  promise a new model insance.
         */
        function create (data) {
            return $http.post(api, data)
                .then(function (response) {
                    return response.data;
                })
                .catch(function (err) {
                    return err;
                });
        }

        /**
         * update                      |  description.
         * @param  {Integer}  |  id    |  model id.
         * @param  {Object}   |  data  |  updated model data.
         * @return {Promise}  |  $http |  promise the updated verision of the model.
         */
        function update (id, data) {
            return $http.put(join(api, id), data)
                .then(function (response) {
                    return response.data;
                })
                .catch(function (err) {
                    return err;
                });
        }
        /**
         * destroy                     |  description.
         * @param  {Integer}  |  id    |  model id.
         * @return {Promise}  |  $http |  promise the model will be destroyed.
         */
        function destroy (id) {
            return $http.delete(join(api, id))
                .then(function (response) {
                    return response.data;
                })
                .catch(function (err) {
                    return err;
                });
        }

        /**
         * join                 | create a url string from the given arguments.
         * @return {String}     | A string with arguments joined by a root slash.
         */
        function join() {
            return Array.prototype.slice.call(arguments).join('/');
        }
    }

}).call(this);
/* global toastr:false, moment:false, TimelineLite:false, TweenMax:false, Cubic:false */
(function() {
    'use strict';

    angular
        .module('core')
        .constant('toastr', toastr)
        .constant('moment', moment)
        .constant('TimelineLite', TimelineLite)
        .constant('TweenMax', TweenMax)
        .constant('Cubic', Cubic)
        .config(Configuration);

        function Configuration(mzNavApiProvider) {
            mzNavApiProvider.hideOn('navBar', 'home')
        }
})();

/* global _:false */
;(function() {
    'use strict';

    angular
        .module('core')
        .config(Core)
        .run(runner);

    /* @ngInject */
    function runner($rootScope) {

    }

    /* @ngInject */
    function Core ($stateProvider, $urlRouterProvider) {

        // console.log($NavigationProvider);

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                mzNav:{
                    background:'white',
                    links:'pink-text'
                },
                views: {
                    '@':{
                        templateUrl: 'app/core/views/home.view.html',
                        controller:  'HomeController as vm',
                    },
                    'nav':{
                        templateUrl: 'app/core/views/header.view.html',
                    },
                    'footer':{
                        templateUrl: 'app/core/views/footer.view.html',
                    }
                }
            })
            .state('grid', {
                url: '/grid',
                mzNav:{
                    background:'white',
                    links:'pink-text'
                },
                views:{
                    '@':{
                        templateUrl: 'app/core/views/grid.view.html',
                    },
                    'nav':{
                        templateUrl: 'app/core/views/header.view.html',

                    }
                }
            });

        ////////////////////////

    }

}).call(this);
;(function() {

    'use strict';

    angular
        .module('core')
        .controller('AppController', AppController);

    /* @ngInject */
    function AppController($scope, $storage, TweenMax, Cubic) {

        // console.log(mzNavApi)
        // console.log(EventDispatcher);
        // this.right = $Navigation.navs.right;
        // console.log(this.right.$toggles.open())
        // console.log($Navigation.navs.right)


        jQuery(document).ready(function() {
            $('.collapsible').collapsible();
        })
    }

}).call(this);

;(function() {
    'use strict';

    angular
        .module('core')
        .controller('GridController', GridController);

    /* @ngInject */
    function GridController($scope) {

        $scope.showContainer = true;
        $scope.showOffsets = false;

        ///////////////////
        $scope.toggleContainer = function() {
            $scope.showContainer = !$scope.showContainer;
        };
        $scope.toggleOffsets = function () {

            $scope.showOffsets = !$scope.showOffsets;
        };
    }

}).call(this);
;(function() {

    'use strict';

    angular
        .module('core')
        .controller('HomeController', HomeController);

    /* @ngInject */
    function HomeController($storage) {}

}).call(this);

/* global Storage:false, $local:false, _:false */
;(function() {

    'use strict';

    angular
        .module('core')
        .service('$storage', $Storage);

    window.$local = window.localStorage;

    var util = new Utility();

    ///////////////////
    // @Class Utility
    // Class for simple utility tools for checking whether the json inout and out put it a string or object
    //
    function Utility () {}

    ///////////////// @toJson
    ///
    // Validate whether the input is an Object or string.
    // @input  {String|Object|Array}
    //
    // @return {String} if input is a string
    // @return {JSON}   if input is Object or array
    Utility.prototype.toJson = function (input) {
        // console.log('input', input, angular.isObject(input));
        return angular.isObject(input) ? angular.toJson(input) : input;
    };

    ///////////////// @toJson
    //
    // Validate whether the required output should be parsed or not
    // @output String or JSON
    // @return {String}         if @output is a string
    // @return {Object|Array}   if @output is an Object or array
    Utility.prototype.fromJson = function (output) {

        return /\s*([\[+\{+])\s*/.test(output) ? angular.fromJson(output) : output;
    };

    ///////////////// Storage
    //
    // @use Web Storage API
    // @Storage.prototype is the built in prototype for both localStorage and sessionStorage
    //                    adding methods to @Storage.prototype will add them to both
    // @localStorage
    // @sessionStorage

    ///////////////// get
    //
    //  @use get to retrive objects from Web Storage via the key property
    //  @key    {String}   Identifier for the requested value from web storage
    //  @return {String|Object|Array}
    Storage.prototype.get = function (key) {
        return util.fromJson($local.getItem(key));
    };

    ///////////////// set
    //
    // @use set to set {key:value} properties in web storage
    // @key    {String}                key identifier in web storage
    // @value  {String|Object|Array}   value to store @key in web storage
    // @return {JSON}                  return the stored Json Object
    Storage.prototype.set = function (key, val) {

        return $local.setItem(key, util.toJson(val));
    };

    ///////////// Item
    //
    // @Class Item We will use new Item when we retrieve values from web storage
    // This will add a few private methods to the retreived objects
    // @key {String}  The key at which the item is stored in web storage
    //
    // @usage If we want an Item from web storage we do the following
    //       var item = new Item('things');
    // @not
    //       vat item = localStorage.getItem('things');
    function Item (key) {
        _.extend(this, $local.get(key));

        Object.defineProperty(this, 'storeId', {
            value:key,
            writable:false,
            configurable:false,
            enumerable:false
        });
    }

    ////////////// save
    //
    // @method Save    save the the current item at it;s current state in web storage
    // @usage
    //      Considering we have the following
    //          var person = new Item('person')
    //
    //      We can now Modify the object
    //          person.name = {};
    //          person.name.first = 'John'
    //          person.name.last = 'Doe'
    //
    //      After modifying the item, we can simply do the following to save it.
    //          person.save()
    //
    Item.prototype.save = function () {
        $local.set(this.storeId, this);
        return;
    };

    ////////////// remove
    //
    // @method Remove. Similar to @save but will remove the current item.
    // @usage
    //        var person = new Item('person');
    //            person.remove();
    Item.prototype.remove = function () {
        // $local.removeItem(this.storeId);
        // delete this;
        // // console.log('removing!!');
        // return;
    };

    ///////////////// $Storage
    //
    // @Class $Storage   the actual service passed to angular.module.service
    // Storage is not only going to maintain the state of Storage items and scope,
    // but will also keep it's own local copy of localStorage.
    //
    // @usage instead of accessing the getItem() and setItem() methods from the web Storage API,
    //        We will use the $Storage api, to keep web storage in sync between states.
    //
    // @methods
    //      - @get
    //      - @set
    //      - @remove
    //      - @sync

    /* @ngInject */
    function $Storage($rootScope) {

        var _this            = this;
        _this.root           = $rootScope;
        _this.root.$$Storage = {};
        this._storage        = {};
    }

    ////////////////// set
    //
    // @method         Set            Set a new property in the local Storage cache.
    // @NOTE                          Items will not be saved in the actual web storage until item.save() is called.
    // @key    {String}               Key property for access into the $Storage cache API, and chache filters.
    // @value  {String|Object|Array}  Values to be stored under @key property.
    // @return {String|Object|Array}  return the retrived objects.
    //
    $Storage.prototype.set = function(key, val) {

        this._storage[key] = new Item(key, val);
        return this._storage[key];
    };
    ////////////////// get
    //
    // @method         get   $storage.get will retrive requested Storage values from wither the chache or localStorage
    // @condition            If chache[key] is not defined, the we use the actual value viw
    $Storage.prototype.get = function(key) {
        if (this._storage[key]) {
            return this._storage[key];
        }
        this._storage[key] = new Item(key);
        return this._storage[key];
    };

    ////////////////// remove
    //
    // @method         remove  remove unecessart properties
    $Storage.prototype.remove = function(key) {
        this._storage[key] = {};
        $local.removeItem(key);
    };

    ////////////////// reset
    //
    // @media         Similar to localStorage.clear()
    // @usage         Set's items in cup
    $Storage.prototype.reset = function(key) {
        this._storage = {};
        $local.clear();
    };

    ////////////////// sync
    //
    // @method         sync   for linking the currrent to local
    // @scope  {Object}       Pass in the current scope inwhich
    $Storage.prototype.sync = function(scope, key, actualKey) {
        scope[key] = this.get(key);
        scope.$watch(key, function() {

            $local.set(key, scope[key]);
        });
        return scope;
    };

}).call(this);
;(function() {
    'use strict';

    angular.module('components', []);

}).call(this);
;(function() {
    'use strict';

    angular.module('directives', []);

}).call(this);
;(function() {
    'use strict';

    angular.module('gettingStarted', []);

}).call(this);
;(function() {
    'use strict';

    angular.module('layout', []);

}).call(this);
;(function() {
    'use strict';

    angular.module('navigation', []);

}).call(this);
/* global jQuery:false */
;(function() {

    'use strict';

    angular
        .module('core')
        .directive('mzAnimations', mzAnimations);

    /* @inject */
    function mzAnimations(TweenMax, TimelineLite, Cubic) {
        return {
            templateUrl: 'app/core/directives/mzAnimations/mzAnimations.template.html',
            restrict: 'E',
            scope: true,

            controller: 'GridController',
            link: link
        };

        ////////////////

        function link(scope, element, attrs) {
            var offsets = {
                s1:'8.33333%',
                s2:'16.66667%',
                s3:'25%',
                s4:'33.33333%',
                s5:'41.66667%',
                s6:'50%',
                s7:'58.33333%',
                s8:'66.66667%',
                s9:'75%',
                s10:'83.33333%',
                s11:'91.66667%',
                s12:'100%'
            };

            var $hideable = $(element).find('.grid-block').not('.indigo').parent();
            var $offseters = $(element).find('.offseter');
            var $container = $('.grids-container.container');
            $hideable.addClass('hide-on-offset');

            scope.$watch('showContainer', function (val) {
                if (val) {
                    TweenMax.to($container, 0.2, {maxWidth:'1280px', width:'70%', ease:Cubic.easeIn});

                } else {
                    TweenMax.to($container, 0.2, {maxWidth:'100%', width:'100%', ease:Cubic.easeIn});
                }
            });

            jQuery(document).ready(function () {

                var $container = jQuery(element);
                var $grey1  = $container.find('.grey.lighten-1');
                var $grey2  = $container.find('.grey.lighten-2');
                var $white  = $container.find('.white');
                var $indigo = $container.find('.indigo');
                var $pink   = $container.find('.pink').not('.accent-1, .accent-2');
                var $pink1  = $container.find('.pink.accent-1');
                var $pink2  = $container.find('.pink.accent-2');

                var anim = {};
                anim.one = {rotationX:'90', ease:Cubic.easeIn};
                anim.two = [
                    {rotationX:'90', y:'100%', ease:Cubic.easeIn},
                    {rotationX:'90', y:'-100%', ease:Cubic.easeIn}
                ];
                anim.three = [
                    {x:'100%', autoAlpha:0, ease:Cubic.easeIn},
                    {x:'-100%', autoAlpha:0, ease:Cubic.easeIn}
                ];
                anim.four = [
                    {x:'100%', autoAlpha:0, ease:Cubic.easeIn},
                    {x:'-100%', autoAlpha:0, ease:Cubic.easeIn}
                ];
                anim.five = [
                    {x:'100%', autoAlpha:0, ease:Cubic.easeIn},
                    {x:'-100%', autoAlpha:0, ease:Cubic.easeIn}
                ];
                anim.six = [
                    {rotation:'180deg', autoAlpha:0, ease:Cubic.easeIn},
                    {rotation:'-180deg', autoAlpha:0, ease:Cubic.easeIn}
                ];

                var tl = new TimelineLite();
                tl
                    .add(pinks)
                    .add(indigos)
                    .add(whites)
                    .add(grey2s)
                    .add(grey1s);

                function grey1s() {

                    var timeline = new TimelineLite();
                    timeline
                        .from($grey1.slice(0, 2), 0.5, anim.six[0], 3)
                        .from($grey1.slice(2, 4), 0.5, anim.six[1], 3);
                }
                function grey2s() {

                    var timeline = new TimelineLite();
                    timeline

                        .from([$grey2[4], $grey2[6]], 0.5, anim.five[0], 2.5)
                        .from([$grey2[5], $grey2[7]], 0.5, anim.five[1], 2.5)
                        .from([$grey2[0], $grey2[1], $grey2[8], $grey2[9]], 0.5, anim.six[1], 3)
                        .from([$grey2[2], $grey2[3], $grey2[10], $grey2[11]], 0.5, anim.six[0], 3);
                }
                function whites() {

                    var timeline = new TimelineLite();
                    timeline
                        .from([$white[6], $white[8]],  0.5, anim.four[1], 2)
                        .from([$white[7], $white[9]],  0.5, anim.four[0], 2)
                        .from([$white[4], $white[10]], 0.5, anim.five[1], 2.5)
                        .from([$white[5], $white[11]], 0.5, anim.five[0], 2.5)
                        .from([$white[0], $white[1], $white[12], $white[13]], 0.5, anim.six[1], 3)
                        .from([$white[2], $white[3], $white[14], $white[15]], 0.5, anim.six[0], 3);
                }

                function indigos() {

                    var timeline = new TimelineLite();
                    timeline
                        .from($indigo.slice(8, 10), 0.5, anim.one)
                        .from([$indigo[6], $indigo[10]], 0.5, anim.three[1], 1.5)
                        .from([$indigo[7], $indigo[11]], 0.5, anim.three[0], 1.5)
                        .from([$indigo[4], $indigo[12]], 0.5, anim.four[1], 2)
                        .from([$indigo[5], $indigo[13]], 0.5, anim.four[0], 2)
                        .from([$indigo[2], $indigo[14]], 0.5, anim.five[1], 2.5)
                        .from([$indigo[3], $indigo[15]], 0.5, anim.five[0], 2.5)
                        .from([$indigo[1], $indigo[17]], 0.5, anim.six[0], 3)
                        .from([$indigo[0], $indigo[16]], 0.5, anim.six[1], 3);
                }

                function pinks() {

                    var timeline = new TimelineLite();
                    timeline
                        .from($pink1, 0.5, anim.one)
                        .from($pink2[0], 0.5, anim.two[0], 0.5)
                        .from($pink2[1], 0.5, anim.two[1], 0.5)
                        .from([$pink[0], $pink[2]], 0.5, anim.three[0], 1)
                        .from([$pink[1], $pink[3]], 0.5, anim.three[1], 1);
                }

            });
        }
    }

}).call(this);

;(function() {

    'use strict';

    angular
        .module('components')
        .factory('componentsFactory', componentsFactory);

    /* @ngInject */
    function componentsFactory() {

    }

}).call(this);
;( function() { 'use strict';
    angular.module('components')
         .config(componentsConfig)
         ;

    /* @ngInject */
    function componentsConfig($stateProvider) {
        $stateProvider

            .state('components', {
                url    : '/components'          ,
                resolve: { resolveUsers:users  },
                views  : {
                      '@'     : {  templateUrl:'app/modules/components/views/components.view.html',
                                   controller:'ComponentsController as vm'                        } ,
                      'nav'   : {  templateUrl:'app/core/views/header.view.html'                  } ,
                      'footer': {  templateUrl:'app/core/views/footer.view.html'                  } } }
                )
            ;

        /*  @ngInject */
        function users(User) {
            return (
                User.all().then( function(response){return response.data;} ) );
            }

        }
    }).call(this);
;(function() {

    'use strict';

    angular
        .module('components')
        .directive('components', components);

    /* @ngInject */
    function components() {

        var directive = {
            restrict: 'EA',
            scope:true,
            template:'<div data-ng-transclude></div>',
            transclude:true,
            controller: 'componentsController as vm',
            link:link
        };

        return directive;

        function link(scope, element, attrs, ctrl, transclude) {}

    }

}).call(this);
;(function() {

    'use strict';

    angular
        .module('components')
        .controller('ComponentsController', ComponentsController);

    /* @ngInject */
    function ComponentsController(resolveUsers) {
        this.users = resolveUsers;

    }

}).call(this);
;(function() {

    'use strict';

    angular
        .module('components')
        .filter('componentsFilter', componentsFilter);

    /* @ngInject */
    function componentsFilter() {}

}).call(this);
;(function() {

    'use strict';

    angular
        .module('components')
        .service('componentsService', componentsService)
        .factory('componentsFactory', componentsFactory);

    /* @ngInject */
    function componentsService() {}

    /* @ngInject */
    function componentsFactory() {}

}).call(this);
;(function() {

    'use strict';

    angular
        .module('directives')
        .factory('directivesFactory', directivesFactory);

    /* @ngInject */
    function directivesFactory() {

    }

}).call(this);
;(function() {

    'use strict';

    angular
        .module('directives')
        .config(directivesConfig);

    /* @ngInject */
    function directivesConfig() {

    }

}).call(this);
;(function() {

    'use strict';

    angular
        .module('directives')
        .controller('directivesController', directivesController);

    /* @ngInject */
    function directivesController() {

    }

}).call(this);
;(function() {

    'use strict';

    angular
        .module('directives')
        .directive('directives', directives);

    /* @ngInject */
    function directives() {

        var directive = {
            restrict: 'EA',
            scope:true,
            template:'<div data-ng-transclude></div>',
            transclude:true,
            controller: 'directivesController as vm',
            link:link
        };

        return directive;

        function link(scope, element, attrs, ctrl, transclude) {}

    }

}).call(this);
;(function() {

    'use strict';

    angular
        .module('directives')
        .filter('directivesFilter', directivesFilter);

    /* @ngInject */
    function directivesFilter() {}

}).call(this);
;(function() {

    'use strict';

    angular
        .module('directives')
        .service('directivesService', directivesService)
        .factory('directivesFactory', directivesFactory);

    /* @ngInject */
    function directivesService() {}

    /* @ngInject */
    function directivesFactory() {}

}).call(this);
;(function() {

    'use strict';

    angular
        .module('gettingStarted')
        .factory('gettingStartedFactory', gettingStartedFactory);

    /* @ngInject */
    function gettingStartedFactory() {

    }

}).call(this);
;(function() {

    'use strict';

    angular
        .module('gettingStarted')
        .config(gettingStartedConfig);

    /* @ngInject */
    function gettingStartedConfig($stateProvider) {
        $stateProvider
            .state('gettingStarted', {
                url:'/gettingStarted',
                mzNav:{
                    background:'white',
                    links:'orange-text'
                },
                views:{
                    '@': {
                        templateUrl:'app/modules/gettingStarted/views/gettingStarted.view.html',
                        controller:'gettingStartedController as vm',
                    },
                    'nav':{
                        templateUrl: 'app/core/views/header.view.html',
                    }
                }

            });
    }

}).call(this);
;(function() {

    'use strict';

    angular
        .module('gettingStarted')
        .controller('gettingStartedController', gettingStartedController);

    /* @ngInject */
    function gettingStartedController() {

    }

}).call(this);
;(function() {

    'use strict';

    angular
        .module('gettingStarted')
        .directive('gettingStarted', gettingStarted);

    /* @ngInject */
    function gettingStarted() {

        var directive = {
            restrict: 'EA',
            scope:true,
            template:'<div data-ng-transclude></div>',
            transclude:true,
            controller: 'gettingStartedController as vm',
            link:link
        };

        return directive;

        function link(scope, element, attrs, ctrl, transclude) {}

    }

}).call(this);
;(function() {

    'use strict';

    angular
        .module('gettingStarted')
        .filter('gettingStartedFilter', gettingStartedFilter);

    /* @ngInject */
    function gettingStartedFilter() {}

}).call(this);
;(function() {

    'use strict';

    angular
        .module('gettingStarted')
        .service('gettingStartedService', gettingStartedService)
        .factory('gettingStartedFactory', gettingStartedFactory);

    /* @ngInject */
    function gettingStartedService() {}

    /* @ngInject */
    function gettingStartedFactory() {}

}).call(this);
;(function() {

    'use strict';

    angular
        .module('layout')
        .factory('layoutFactory', layoutFactory);

    /* @ngInject */
    function layoutFactory() {

    }

}).call(this);
;(function() {

    'use strict';

    angular
        .module('layout')
        .config(layoutConfig);

    /* @ngInject */
    function layoutConfig($stateProvider) {
        $stateProvider
            .state('layout', {
                url: '/layout',
                templateUrl:'app/modules/layout/views/layout.view.html'
            });
    }

}).call(this);
;(function() {

    'use strict';

    angular
        .module('layout')
        .controller('layoutController', layoutController);

    /* @ngInject */
    function layoutController() {

    }

}).call(this);
;(function() {

    'use strict';

    angular
        .module('layout')
        .directive('layout', layout);

    /* @ngInject */
    function layout() {

        var directive = {
            restrict: 'EA',
            scope:true,
            template:'<div data-ng-transclude></div>',
            transclude:true,
            controller: 'layoutController as vm',
            link:link
        };

        return directive;

        function link(scope, element, attrs, ctrl, transclude) {}

    }

}).call(this);
;(function() {

    'use strict';

    angular
        .module('layout')
        .filter('layoutFilter', layoutFilter);

    /* @ngInject */
    function layoutFilter() {}

}).call(this);
;(function() {

    'use strict';

    angular
        .module('layout')
        .service('layoutService', layoutService)
        .factory('layoutFactory', layoutFactory);

    /* @ngInject */
    function layoutService() {}

    /* @ngInject */
    function layoutFactory() {}

}).call(this);
;(function() {

    'use strict';

    angular
        .module('navigation')
        .factory('navigationFactory', navigationFactory);

    /* @ngInject */
    function navigationFactory() {

    }

}).call(this);
;(function() {

    'use strict';

    angular
        .module('navigation')
        .config(navigationConfig);

    /* @ngInject */
    function navigationConfig() {

    }

}).call(this);
;(function() {

    'use strict';

    angular
        .module('navigation')
        .controller('navigationController', navigationController);

    /* @ngInject */
    function navigationController() {

    }

}).call(this);
;(function() {

    'use strict';

    angular
        .module('navigation')
        .directive('navigation', navigation);

    /* @ngInject */
    function navigation() {

        var directive = {
            restrict: 'EA',
            scope:true,
            template:'<div data-ng-transclude></div>',
            transclude:true,
            controller: 'navigationController as vm',
            link:link
        };

        return directive;

        function link(scope, element, attrs, ctrl, transclude) {}

    }

}).call(this);
;(function() {

    'use strict';

    angular
        .module('navigation')
        .filter('navigationFilter', navigationFilter);

    /* @ngInject */
    function navigationFilter() {}

}).call(this);
;(function() {

    'use strict';

    angular
        .module('navigation')
        .service('navigationService', navigationService)
        .factory('navigationFactory', navigationFactory);

    /* @ngInject */
    function navigationService() {}

    /* @ngInject */
    function navigationFactory() {}

}).call(this);