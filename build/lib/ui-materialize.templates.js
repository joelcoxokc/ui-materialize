angular.module("ui.materialize").run(["$templateCache", function($templateCache) {$templateCache.put("components/blur.template.html","");
$templateCache.put("components/button.template.html","");
$templateCache.put("components/card.template.html","<div class=\"card\"></div>\n");
$templateCache.put("components/collapsible.html","<ul class=\"mz-collapsible collapsible\" data-collapsible=\"{{type}}\" data-ng-transclude></ul>");
$templateCache.put("components/collection-item.html","<li class=\"collection-item\" data-ng-transclude>\n\n</li>");
$templateCache.put("components/collection.html","<ul class=\"collection\" data-ng-transclude>\n\n</ul>");
$templateCache.put("components/dialog.template.html","");
$templateCache.put("components/form.template.html","");
$templateCache.put("components/include.template.html","");
$templateCache.put("components/media.template.html","");
$templateCache.put("components/modal.template.html","");
$templateCache.put("components/notification.template.html","");
$templateCache.put("components/progress.template.html","");
$templateCache.put("components/ripple.template.html","");
$templateCache.put("components/select.template.html","");
$templateCache.put("components/shadow.template.html","");
$templateCache.put("components/tab-item.html","<li class=\"tab-item col\" ng-style=\"tabWidth\"><a data-ng-transclude></a></li>\n");
$templateCache.put("components/tab.html","<div class=\"mz-tab col s12\" data-ng-transclude></div>\n");
$templateCache.put("components/tabContent.template.html","");
$templateCache.put("components/table.template.html","");
$templateCache.put("components/tabs.html","<div class=\"row\">\n  <div class=\"col s12\">\n    <ul class=\"mz-tabs z-depth-1\" data-ng-transclude></ul>\n  </div>\n</div>\n");
$templateCache.put("components/text-field.template.html","");
$templateCache.put("components/tooltip.template.html","");
$templateCache.put("core/materialize.template.html","<div class=\"ui-materialize\"></div>\n");
$templateCache.put("layout/body.template.html","<section id=\"\" class=\"mz-body\" data-ng-transclude></section>\n");
$templateCache.put("layout/col.template.html","");
$templateCache.put("layout/container.template.html","");
$templateCache.put("layout/footer.template.html","<footer data-ng-class=\"color\" class=\"mz-footer\" ui-view=\"{{view}}\"></footer>\n");
$templateCache.put("layout/main.template.html","<main data-ng-class=\"color\" class=\"mz-main\" ui-view=\"{{view}}\"></main>\n");
$templateCache.put("layout/view.template.html","");
$templateCache.put("nav/action-group.html","<ul id=\"{{mobile}}\"\n    class=\"nav-action-group\" data-ng-transclude></ul>\n");
$templateCache.put("nav/action.html","<li><a class=\"{{waves}}\"  data-ng-class=\"childClassList\"  href=\"{{link}}\"\n    >   <i  data-ng-if=\"icon\"  class=\"{{icon}}\" ></i>\n        <span  ng-if=\"label\"  class=\"nav-action-text\" >{{label}}</span>\n    </a></li>\n");
$templateCache.put("nav/bar-brand.html","<div class=\"bar-brand\" data-ng-transclude>\n\n</div>\n");
$templateCache.put("nav/bar-content.html","<div class=\"bar-content\"></div>");
$templateCache.put("nav/bar-view.html","<nav class=\"mz-nav-bar\" data-ng-class=\"{\n        \'bar-fixed\' : fixed,\n        \'bar-small\' : size===\'small\',\n        \'bar-medium\': size===\'medium\',\n        \'bar-large\' : size===\'large\'\n    }\">\n    <div class=\"bar-container {{bg}}\" ui-view=\"{{view}}\"></div></nav>");
$templateCache.put("nav/bar.html","<nav class=\"mz-nav-bar\" data-ng-class=\"{\n        \'bar-fixed\' : fixed,\n        \'bar-small\' : size===\'small\',\n        \'bar-medium\': size===\'medium\',\n        \'bar-large\' : size===\'large\'\n    }\">\n    <div data-ng-if=\"view\" class=\"bar-container {{bg}}\" ui-view=\"{{view}}\"></div>\n    <div data-ng-if=\"!view\" class=\"bar-container {{bg}}\" data-ng-transclude></div></nav>");
$templateCache.put("nav/side-collapse.html","<li class=\"side-collapse\">\n    <div class=\"{{waves}} collapsible-header\" data-ng-class=\"childClassList\">\n        <span class=\"nav-action-text\">{{header}}</span>\n        <i data-ng-if=\"icon\" class=\"{{icon}}\"></i>\n    </div>\n    <div class=\"collapsible-body\" data-ng-class=\"\" data-ng-transclude>\n\n    </div>\n</li>\n");
$templateCache.put("nav/side-collapsible.html","<ul class=\"collapsible collapsible-accordion side-collapsible\" data-ng-transclude></ul>");
$templateCache.put("nav/side-content.html","<section class=\"side-content\" data-ng-transclude></section>");
$templateCache.put("nav/side-header.html","<header class=\"side-header\" data-ng-transclude></header>");
$templateCache.put("nav/side.html","<aside class=\"mz-side-nav\">\n    <section class=\"side-nav nav-container side-container\" ui-view=\"{{view}}\"></section>\n</aside>\n");}]);