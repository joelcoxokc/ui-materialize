;(function() { 'use strict';
    angular
        .module('mz.layout.body', [])
        .directive('mzBody', mzBody)
        ;
    /* @inject */
    function mzBody() {
      return { restrict:'E', require:'^mzMaterialize' , scope:true , transclude:true , link:link };
        ////////////////
        function link(scope, element, attrs, ctrl, transclude) {
            // scope.$parent.$parent = mzMaterialize $scope
            // scope.$parent.$parent.mz = ctrl
            ctrl.body = element;
            element.addClass('mz-body');
            // console.log('BODY',  scope);
            ///////////////////////////////
            transclude(scope, element.append);

            /**
             *      toggle
             *      @description
             *      @param  {Object}        description
             *      @return {Object}        description
             */
            function toggle (param) {}
          }
      }
  }).call(this);
;(function() { 'use strict';
    angular
        .module('mz.layout.container', [])
        .directive('mzContainer', mzContainer)
        ;
    /* @inject */
    function mzContainer() {
        return { restrict: 'AC' , require: '^mzMaterialize' , scope:true , link:link };
        ////////////////
        function link(scope, element, attrs, ctrl) {
            element.addClass('container');
            element.addClass('mz-container');
          }
      }
  }).call(this);
;(function() { 'use strict';
    angular
        .module('mz.layout.flex', [])
        .directive('mzFlex', mzFlex)
        .run(mzRunner)
        ;
    function mzRunner($rootScope) {
        $rootScope.$toggleLeftSideNav = function() {};
      }

    /* @inject */
    function mzFlex() {
        return  { template: '<div class="mz-flex" data-ng-transclude></div>'
                , restrict  : 'E'
                , scope     : {}
                , replace   : true
                , transclude: true
                , controller: 'mzNavController as vm'
                , link: link
                };
        ////////////////
        function link(scope, element, attrs, ctrl) {
            var $body;
            ///////////////////////////////
          }
      }
  }).call(this);
;(function() { 'use strict';
    angular
        .module('mz.layout.footer', [])
        .directive('mzFooter', mzFooter)
        ;
    /* @inject */
    function mzFooter() {
        return { templateUrl: 'layout/footer.template.html'
                 // template: '<footer data-ng-class="color" data-ng-transclude></footer>'
               , restrict   : 'E'
               , scope      : { color:'@' }
               , transclude : true
               , replace    : true
               , link       : link
               };
        ////////////////
        function link(scope, element, attrs) {
            ///////////////////////////////
            /**
             *      toggle
             *      @description
             *      @param  {Object}        description
             *      @return {Object}        description
             */
            function toggle(param) {}
          }
      }
  }).call(this);
;(function() { 'use strict';
    angular
        .module('mz.layout.grid', [])
        .directive('mzCol', mzCol)
        ;
    /* @inject */
    function mzCol() {
        return { template: '<div class="col" data-ng-class="ngClasses" data-ng-transclude></div>'
               , restrict: 'EA',
               , scope:{ s:'@' , m:'@' , l:'@' , offset:'@' }
               , transclude: true
               , replace:true
               , link: link
               };
        ////////////////
        function link(scope, element, attrs) {
            scope.ngClasses = {};
            attrs.s && ( scope.ngClasses['s'+attrs.s] = !!attrs.s );
            attrs.m && ( scope.ngClasses['m'+scope.m] = !!scope.m );
            attrs.l && ( scope.ngClasses['l'+scope.m] = !!scope.l );
            attrs.offset && ( scope.ngClasses['offset-'+scope.offset] = !!scope.offset );
            // scope.$apply()
            ///////////////////////////////
            /**
             *      toggle
             *      @description
             *      @param  {Object}        description
             *      @return {Object}        description
             */
            function toggle (param) {}
          }
      }
  }).call(this);
;(function() { 'use strict';
    angular
        .module('mz.layout.include', [])
        .directive('mzInclude', mzInclude)
        ;
    /* @inject */
    function mzInclude() {
        return { restrict:'E' , link:link };
        ////////////////
        function link(scope, element, attrs, ctrl, transclude) {
            transclude(scope, element.append);
          }
      }
  }).call(this);
;(function() { 'use strict';
    angular.module('ui.materialize.layout',
            [ 'mz.layout.controllers'
            , 'mz.layout.container'
            , 'mz.layout.services'
            , 'mz.layout.include'
            , 'mz.layout.footer'
            , 'mz.layout.body'
            , 'mz.layout.flex'
            , 'mz.layout.grid'
            , 'mz.layout.main'
            , 'mz.layout.view'
            ]  );
  }).call(this);
;(function() { 'use strict';
    angular
        .module('mz.layout.main', [])
        .directive('mzMain', mzMain)
        ;
    /* @inject */
    function mzMain() {
        return { template  : '<main class="mz-main" data-ng-transclude></main>'
               , restrict  : 'E'
               , scope     : true
               , transclude: true
               , replace   : true
               , link      : link
               };   };
        ////////////////
        function link(scope, element, attrs) {

            ///////////////////////////////

            /**
             *      toggle
             *      @description
             *      @param  {Object}        description
             *      @return {Object}        description
             */
            function toggle (param) {}
          }
      }
  }).call(this);
;(function() { 'use strict';
    angular
        .module('mz.layout.view', [])
        .directive('mzView', mzView)
        ;
    /* @inject */
    function mzView() {
        return { template: '<main class="mz-view"><ui-view class="mz-body col s12"></ui-view></main>'
               , restrict: 'E'
               , scope: true
               , replace:true
               , link: link
               };
        //////////////
        function link(scope, element, attrs) {

            ///////////////////////////////

            /**
             *      toggle
             *      @description
             *      @param  {Object}        description
             *      @return {Object}        description
             */
            function toggle (param) {}
          }
      }
  }).call(this);
;(function() { 'use strict';
    angular.module('ui.materialize.nav',
        [ 'mz.nav.services'
        , 'mz.nav.controllers'
        , 'mz.nav.action-group'
        , 'mz.nav.collapsible-group'
        , 'mz.nav.container'
        , 'mz.nav.toggle'
        , 'mz.nav.action'
        , 'mz.nav.footer'
        , 'mz.nav.brand'
        , 'mz.nav.side'
        , 'mz.nav.bar'
        ]  );
  }).call(this);
;(function() { 'use strict';
    angular
        .module('mz.nav.action-group', [])
        .directive('mzNavActions', mzNavActions)
        .directive('navActionGroup', navActionGroup)
        ;

    ////////////////////
    /// Global Variables
    var globalSides = { top:{} , right:{} , bottom:{} , left:{} };

    /* @ngInject */
    function mzNavActions(){
        return { restrict  : 'E'
               , controller: function(){}
               , scope     : true
               , transclude: true
               , link      : link
               };

        ////////////

        function link(scope, element, attrs, ctrl, transclude) {
            element.addClass('mz-nav-actions')
            transclude(scope, element.append);   }

      } // end function mzNavActions

    /*
        navActionGroup
    ===================

        @sub-directive  |  <nav-action-group/>
        @parent         |  <mz-nav> || <mz-nav-{right | left}>
        @description    |  Wrap actions into groups based on the side in which the tools belong
        @options        |  <top | right | bottom | left>

        @attributes
            //=====================
            //=====GLOBAL==========
            //  @attr  | links     Add classes to all inner links/ <a> elements
            //
            //============================
            //=== NAV-TOP | NAV-BOTTOM ===
            //
            //  @parent   |   mz-nav   {top || bottom}
            //  @attr     |   side     Action group for either the left or right actions
            //  @usage    |
            //            |   <mz-nav side="top">
            //                    <nav-tools
            //                        side= <left || right>
            //                        mobile= <boolean>
            //                        links= <classList-for-inner links>
            //                    ></nav-tools>
            //                </mz-nav>
            //
            //============================
            //=== NAV-RIGHT | NAV-LEFT ===
            //
            // @parent      |  mz-nav   {left || right} || mz-nav-left || mz-nav-right
            // @attr        |  side     Action group for either top or bottom actions
            // @usage       |
            //              | <mz-nav-left>
            //                    <nav-tools
            //                        side= <top || bottom>
            //                        mobile= <boolean>
            //                        links= <classList-for-inner links>
            //                    ></nav-tools>
            //                </mz-nav-left>
    ========*/
    /* @ngInject */
    function navActionGroup() {
        return { template  : '<ul id="{{mobile}}" class="side-nav"></ul>'
               , restrict  : 'E'
               , controller: function(){}
               , scope     : true
               , transclude: true
               , link      : link
               };
        /////////////
        function link(scope, element, attrs, ctrl, transclude) {
          var inner = element.children('ul');
            ///  @scope   childClassList
            ///  @scope   mobile
            /* set child classlist on scope to be picked up by the mz-action directive */
            scope.childClassList = attrs.links;
            attrs.mobile && (scope.mobile = 'nav-mobile');
            element.addClass('nav-action-group');
            ///  @validate   the requested group location
            if (attrs.side) {
                if (globalSides[attrs.side]) { element.addClass('nav-action-group-'+attrs.side); }
                else { console.error('Please specify side="<top | right | bottom |left>" when using nav-action-group'); }  }
            ///  @translucde   Transclude element to the child <ul>
            transclude(scope, inner.append);
            //////     @jQuery   apply jQuery methods when dom is ready;
            jQuery(document).ready(function() {
                // Dynamically addClasses to all nav-sides inner links from the "link" attr
                attrs.links && $(element).find('.linked').addClass(attrs.links);  });
          }
      }
  }).call(this);
;(function() { 'use strict';
    angular
        .module('mz.nav.action', [])
        .directive('navAction', navAction)
        ;
    /* @ngInject */
    function navAction() {
        return { templateUrl: 'nav/nav-action.template.html'
               , require    : '^navActionGroup'
               , restrict   : 'E'
               , transclude : true
               , replace    : true
               , scope      : true
               , link       : link
               };
        //////////////
        function link(scope, element, attrs, ctrl, transclude) {
            var inner = element.children();
            scope.icon   =  attrs.icon  || null;
            scope.link   =  attrs.link  || null;
            scope.label  =  attrs.label || null;
            scope.waves  = (attrs.waves ? 'waves-effect waves-'+attrs.waves : '');
            transclude(scope, inner.append);   }
    } }).call(this);
;(function() { 'use strict';
    angular
        .module('mz.nav.bar', [])
        .directive('mzNav', mzNav)
        ;
    /* @inject */
    function mzNav($rootScope, $document) {
        return { templateUrl: 'templates/mzNav.template.html'
               , restrict: 'E'
               , require:'^mzMaterialize',
                 // scope:true,
               , scope: { color:'@' , side:'@' , fixed:'@' , brand:'@' , view:'@' , size: '@' }
               , transclude: true
               , link: link
               };
        /////////////
        function link(scope, element, attrs, ctrl, transclude) {
            var config = {};
            var side = 'top' || attrs.side;
            scope.side = side
            attrs.fixed && (config.fixed = true); // FIXME: ?? config.fixed = !!attrs.fixed
            attrs.size  && (config[attrs.size] = true);
            ctrl.addNav(side, element, attrs, config, scope);
            transclude(scope, function(clone){ element.find('nav').append(clone); });
          }
      }
  }).call(this);


(function() {
    /*
     *  TEMPLATE mz-nav
     */
    angular
        .module('ui.materialize')
        .run( ["$templateCache", function($templateCache) {
            $templateCache.put('templates/mzNav.template.html',
                  '<nav class="{{color}} mz-nav-container nav-container-top">'+
                    '<mz-nav-brand ng-if="brand" class="">{{brand}}</mz-nav-brand>'+
                    '<div data-ng-if="view" class="mz-nav-container-view" ui-view="{{view}}"></div></nav>'  );
            }])
        ;
  }).call(this);
;(function() { 'use strict';
    angular
        .module('mz.nav.brand', [])
        .directive('mzNavBrand', mzNavBrand)
        ;
    /*
        mzNavBrand
    ====================

        @sub-directive  |   mz-nav-brand
        @parent         |   mz-nav
        @description    |   directive for adding the logo brand to the top nav...
        @NOTE           |   replaced by an <a></a> element. all basic attributes apply
        @usage          |
                        |   <mz-nav>
                                <mz-nav-brand
                                    ui-sref= <state-name>
                                </mz-nav-brand>
                            </mz-nav>
    ===================*/
    /* @ngInject */
    function mzNavBrand() {
        return { template  : '<a class=""></a>'
               , restrict  : 'E'
               , require   : '^mzMaterialize'
               , scope     : true
               , transclude: true
               , replace   : true
               , link      :link
               };
        /////////////
        function link(scope, element, attrs, ctrl, transclude) {
            element.addClass('mz-nav-brand brand-logo');
            transclude(scope, element.append);  }
      } // end function mzNavBrand
  }).call(this);
;(function() { 'use strict';
    angular
        .module('mz.nav.collapse', [])
        .directive('navCollapse', navCollapse)
        ;
    function navCollapse() {
        return { template  : '<li><div class="{{waves}} collapsible-header" data-ng-class="childClassList">'+
                               '<span class="nav-action-text">{{header}}</span>'+
                               '<i data-ng-if="icon" class="{{icon}}"></i></div>'+
                               '<div class="collapsible-body" data-ng-class="">'+
                                 '<ul data-ng-transclude></ul></div></li>'
               , restrict  : 'E'
               , require   : '^navCollapsibleGroup'
               , scope     : { header:'@' }
               , replace   : true
               , transclude: true
               , link      : link
               };
        ///////////////////
        function link(scope, element, attrs, ctrl, transclude) {
            var inner, defaults;
            inner = element.children();
            element.addClass('nav-collapse');
            ///  @scope state  |  set the state for ui-sref if attribute is passed
            ///  @scope link   |  set the link for href if attribute is passed
            ///  @scope waves  |  set waves on scope, or default wave is specified. otherwise no waves used
            scope.state = attrs.state  || null;
            scope.link  = attrs.link   || null;
            scope.icon  = attrs.icon   || null;


            // FIXME: What's the new behavior here?
            attrs.waves &&( scope.waves = 'waves-effect ' );
            if (_.isString(attrs.waves) && attrs.waves !== 'true') {
                scope.waves += 'waves-'+attrs.waves; }
            else {
                scope.waves += 'waves-light'; }

            //////     @transclude  |  transclude the actions
            // transclude(scope, function (clone) {
            //     inner.append(clone);
            // });
          }
      }
  }).call(this);
;(function() { 'use strict';
    angular
        .module('mz.nav.collapsible-group', ['mz.nav.collapse'])
        .directive('navCollapsibleGroup', navCollapsibleGroup)
        ;

    /* @ngInject */
    function navCollapsibleGroup() {
        return {  templateUrl: 'nav/nav-collapsible-group.template.html'
               , restrict   : 'E'
               , scope      : true
               , controller : controller
               , link       : link
               };
        //////////////

        function controller() {}

        function link(scope, element, attrs, ctrl, transclude) {

                var globalSides = {  top:{} , right:{} , bottom:{} , left:{}  };
                var inner = element.children('ul');
                ///  @scope   childClassList
                ///  @scope   mobile
                scope.childClassList = attrs.links;
                attrs.mobile &&( scope.mobile = 'nav-mobile' );
                ///  @class   inner
                ///  @class   element
                inner.addClass('collapsible collapsible-accordion');
                element.addClass('nav-collapsible-group');
                if(attrs.side && globalSides[attrs.side]) {
                    element.addClass('nav-collapsible-group-'+attrs.side); }
                jQuery(document).ready(function() {
                    attrs.links && $(element).find('.linked').addClass(attrs.links);  });
            } // end function link
    } }).call(this);
;(function() { 'use strict';
    angular
        .module('mz.nav.container', [])
        // .directive('mzNavContainer', mzNavContainer);
        // .directive('navContainer', navContainer)
        ;
    function navContainer() {
        return { restrict: 'E'
               , scope   : {side:'@'}
               , link    : function(scope, element, attrs) { console.log(scope.side); }
               };
      }
    // function mzNavContainer() {
    //     return {
    //       restrict: 'E',
    //       scope: {
    //         side:'@'
    //       },
    //       link:link,
    //     };

    //     function link(scope, element, attrs) {
    //       element.addClass('mz-nav-conatainer');
    //         // element.addClass('nav-container-'+attrs.mzNavContainer);
    //     }
    // }
  }).call(this);


// (function() {
//     angular
//         .module('ui.materialize')
//         .run(["$templateCache", function($templateCache) {
//                     // <!-- <a ui-sref="home" class="brand-logo indigo-text waves-effect waves-light"><strong class="pink-text text-accent-1">ui</strong>Materialize</a> -->
//                       // <!-- <li class="waves-effect waves-light"><a class="pink-text" href="">JavaScript</a></li> -->
//             $templateCache.put('templates/mzNavContainer.template.html',
//                 // '<div class="nav-wrapper">'+
//                   '<div mz-container>'+
//                     '<ul id="" class="left side-nav">'+
//                       '<li><a href="#" mz-toggle-nav="right" toggle=\'open\'><i class="mdi-navigation-menu pink-text text-accent-1"></i></a></li>'+
//                     '</ul>'+
//                     '<ul id="" class="right side-nav">'+
//                       // '<li class="waves-effect waves-light"><a class="pink-text" ui-sref="gettingStarted">Getting Started</a></li>'+
//                       // '<li class="waves-effect waves-light"><a class="pink-text" ui-sref="grid">Grid</a></li>'+
//                       // '<li class="waves-effect waves-light"><a class="pink-text" ui-sref="components">Components</a></li>'+
//                     '</ul>'+
//                   '</div>'
//                 // '</div>'
//             )
//         }]);
// }).call(this);
;(function() { 'use strict';
    angular
        .module('mz.nav.footer', [])
        .directive('mzNavFooter', mzNavFooter)
        ;
    /* @inject */
    function mzNavFooter($rootScope, $document) {
        return { restrict  : 'E'
               , require   : '^mzMaterialize'          // FIXME: is this a regex?
               , scope     : { color:'@' , side:'@' , fixed:'@' , brand:'@' , view:'@' , size:'@' }
               , transclude: true
               , link      : link
               //, templateUrl: 'templates/mzNav.template.html',
               //, scope:true,
               };
        /////////////
        function link(scope, element, attrs, ctrl, transclude) {
            var config = {};
            var side = attrs.side || 'top'; // FIXME: I reveresed these terms. Is this correct?
            scope.side = side;
            config.fixed = !!attrs.fixed;
            config[attrs.size] = !!attrs.size;
            ctrl.addNav(side, element, attrs, config, scope);
            transclude(scope, function (clone) { element.find('nav').append(clone); });
            transclude(scope, element.find('nav').append); // FIXME: Is this right, or the line above?
            }
        } // end function mzNavFooter
  }).call(this);
;(function() { 'use strict';
    angular
        .module('mz.nav.side', [])
        .directive('mzNavLeft', mzNavLeft)
        .directive('mzNavRight', mzNavRight)
        .directive('mzNavSideHeading', mzNavSideHeading)
        .directive('mzNavSideContent', mzNavSideContent)
        .directive('headerActionHuge', headerActionHuge)
        // .directive('navSideContainer', navSideContainer)
        ;
    /* @inject */
    function mzNavLeft( $animate) { return new SideNavigation('left'); }
    /* @inject */
    function mzNavRight($animate) { return new SideNavigation('right'); }

    function SideNavigation(side) {
        this.scope       = true;
        this.restrict    = 'E';
        this.transclude  = true;
        this.require     = '^mzMaterialize';
        this.templateUrl = 'nav/nav-side.template.html';
        ////////////////////
        this.link = function(scope, element, attrs, ctrl, transclude) {
            var config = {};
            element.addClass('mz-side-nav');
            ctrl.addNav(side, element, attrs, config, scope);
            scope.settings = { side:side };  };  }

    function mzNavSideHeading() {
        return { scope     : true
               , restrict  : 'EA'
               , transclude: true
               , link      : function link(scope, element, attrs, ctrl, transclude) {
                                 element.addClass('mz-nav-side-heading');
                                 transclude(scope, element.append(clone)); }
               };  }

    function mzNavSideContent() {
        return { scope     : true
                 //, template: '<div class="nav-side-content-wrap" data-ng-transclude></div>',
               , restrict  : 'EA'
               , transclude: true
               , link      : function link(scope, element, attrs, ctrl, transclude) {
                                 element.addClass('mz-nav-side-content');
                                 transclude(scope, element.append);    }
               };   }

    function headerActionHuge() {
        return { restrict: 'A'
               , require : '^mzMaterialize'
               //, scope: true,
               , link: function(scope, element, attrs, ctrl) {
                           element.addClass('header-action-huge');
                           ctrl.registerAction('right', 'useLargeAction');
                           // .useLargeAction();
                           }
               };   }
    }).call(this);
;(function() { 'use strict';
    angular
        .module('mz.nav.toggle', [])
        .directive('mzToggleNav', mzToggleNav)
        .directive('mzSideNavToggle', mzSideNavToggle)
        ;
    /* @inject */

    function mzToggleNav() {
         return { restrict: 'A'
                , require : '^mzMaterialize'
                , scope   : { toggle:'@' }
                , link    : function(scope, element, attrs, ctrl) {}
                };   }

    /* @ngInject */

    function mzSideNavToggle() {
        return { restrict: 'A'
               , require : '^mzMaterialize',
               , scope   : { toggle:'@' , icon:'@' , nextIcon:'@' }
               , link    : function(scope, element, attrs, ctrl) {
                             var icon = angular.element('<i>').addClass(' first-icon '+scope.icon); // FIXME: leading space?
                             var nextIcon = angular.element('<i>').addClass(' next-icon '+scope.nextIcon);
                             var side, toggle, toggleLeft, toggleRight, nav;

                             element.addClass('nav-side-toggle');
                             scope.toggleOn = false;
                             element.append(icon);
                             element.append(nextIcon);
                             element.on('click', function(){
                               scope.toggleOn = !scope.toggleOn;
                               // toggleNext(scope.toggleOn); // FIXME: never uses arg
                               element.toggleClass('next');
                               // console.log(scope.nextIcon);
                               ctrl.$navs.right.scope.isOpen = !ctrl.$navs.right.scope.isOpen;
                               ctrl.$navs.right.scope.$apply();
                               console.log(ctrl.$navs.right.scope.isOpen);  });  }
               } // end object literal
          } // end function mzSideNavToggle
  }).call(this);
;(function() { 'use strict';
    angular
        .module('mz.components.controllers.button', [])
        .controller('mzButtonController', mzButtonController)
        ;
    /* @ngAnotate */
    function mzButtonController($scope) {
        var _this = this;
        this.init = function(element) { this.element = element; };  }
  }).call(this);
;(function() { 'use strict';
    angular
        .module('mz.components.controllers.card', [])
        .controller('mzCardController', mzCardController)
        ;
    /* @ngAnotate */
    function mzCardController($scope) {
        var _this = this;
        this.init = function(element) { this.element = element; };  }
  }).call(this);
;(function() { 'use strict';
    angular
        .module('mz.components.controllers.collapsible', [])
        .controller('mzCollapsibleController', mzCollapsibleController)
        ;
    /* @ngAnotate */
    function mzCollapsibleController($scope) {
        var _this = this;
        this.init = function(element) { this.element = element; };  }
  }).call(this);
;(function() { 'use strict';
    angular
        .module('mz.components.controllers.collection', [])
        .controller('mzCollectionController', mzCollectionController)
        ;
    /* @ngAnotate */
    function mzCollectionController($scope) {
        var _this = this;
        this.init = function(element) { this.element = element; };  }
  }).call(this);
;(function() { 'use strict';
    angular
        .module('mz.components.controllers.dialog', [])
        .controller('mzDialogController', mzDialogController)
        ;
    /* @ngAnotate */
    function mzDialogController($scope) {
        var _this = this;
        this.init = function(element) { this.element = element; };  }
  }).call(this);
;(function() { 'use strict';
    angular
        .module('mz.components.controllers.dropdown', [])
        .controller('mzDropdownController', mzDropdownController)
        ;
    /* @ngAnotate */
    function mzDropdownController($scope) {
        var _this = this; // FIXME: Is this some Angular magic, or does _this get immediately discarded
        this.init = function(element) { this.element = element; };  }
  }).call(this);
;(function() { 'use strict';
    angular
        .module('mz.components.controllers.form', [])
        .controller('mzFormController', mzFormController)
        ;
    /* @ngAnotate */
    function mzFormController($scope) {
        var _this = this;
        this.init = function(element) { this.element = element; };  }
  }).call(this);
;(function() { 'use strict';
    angular.module('mz.components.controllers',
        [ 'mz.components.controllers.button'
        , 'mz.components.controllers.card'
        , 'mz.components.controllers.collapsible'
        , 'mz.components.controllers.collection'
        , 'mz.components.controllers.dialog'
        , 'mz.components.controllers.dropdown'
        , 'mz.components.controllers.form'
        , 'mz.components.controllers.media'
        , 'mz.components.controllers.modal'
        , 'mz.components.controllers.table'
        , 'mz.components.controllers.tabs'
        , 'mz.components.controllers.notification'
        , 'mz.components.controllers.progress'
        , 'mz.components.controllers.select'
        , 'mz.components.controllers.text-field'
        , 'mz.components.controllers.ripple'
        , 'mz.components.controllers.tooltip'
        ]  );
  }).call(this);
;(function() { 'use strict';
    angular
        .module('mz.components.controllers.media', [])
        .controller('mzMediaController', mzMediaController)
        ;
    /* @ngAnotate */
    function mzMediaController($scope) {
        var _this = this;
        this.init = function(element) { this.element = element; };  }
  }).call(this);
;(function() { 'use strict';
    angular
        .module('mz.components.controllers.modal', [])
        .controller('mzModalController', mzModalController)
        ;
    /* @ngAnotate */
    function mzModalController($scope) {
        var _this = this;
        this.init = function(element) { this.element = element; };  }
  }).call(this);