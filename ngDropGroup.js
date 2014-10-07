'use strict';
(
function () {
    angular.module('ngDropGroup', ['ng'])
        .directive('ngDropGroup', function() {
            return {
                restrict: 'E',
                replace: true,
                transclude: true,
                scope: {
                    dgPlaceholder: '@',
                    dgModel: '@',
                    dgSource: '@'
                },
                /*jshint multistr: true */
        template: "<span class='dg-groups' ng-class='{\"dg-open\":showDg}'>\
<div class='dg-selection' ng-class='{\"dg-placeholder\" : dgChoice==dgPlaceholder}' ng-click='showDg=!showDg'>{{dgChoice}}</div>\
            <div class='dg-groups-mask' ng-click='showDg=!showDg'></div>\
            <ul class='dg-list'>\
<li class='dg-group' ng-repeat='group in groups track by $index' >\
<div ng-class='{\"dg-expanded\":group.show}' ng-click='group.show = !group.show'>{{group.name}}</div>\
                    <ul ng-show='group.show' class='dg-items'>\
<li class='dg-item {{item.name == dgChoice && \"active\" || \"\"}}' ng-repeat='item in group.items track by $index' ng-click='updateModel(item)'>{{item.name}}</li>\
                    </ul>\
                </li>\
            </ul>\
        </span>",
                link: function(scope) {
                    scope.dgPlaceholder = scope.dgPlaceholder || 'Please select';
                    scope.groups = scope.$parent[scope.dgSource];
                    scope.updateModel = function(item) {
                        scope.$parent[scope.dgModel] = item.value || item.name;
                        scope.dgChoice = item.name || item.value;
                        scope.showDg = false;
                    };
                    // using 'for', not 'forEach' due to IE support
                    // if the model already has a value, set the placeholder to the model name
                    if (scope.$parent[scope.dgModel]) {
                        var nG = scope.$parent[scope.dgSource].length;
                        for (var g = 0; g < nG; g++) {
                            if (scope.$parent[scope.dgSource][g].items) {
                                var nI = scope.$parent[scope.dgSource][g].items.length;
                                for (var i = 0; i < nI; i++) {
                                    var ci = scope.$parent[scope.dgSource][g].items[i].value;
                                    if (ci == scope.$parent[scope.dgModel]) {
                                        scope.dgChoice = scope.$parent[scope.dgSource][g].items[i].name || scope.$parent[scope.dgSource][g].items[i].value;
                                        // show the group by default
                                        scope.$parent[scope.dgSource][g].show = true;
                                    }
                                }
                            }
                        }
                    }
                    if (!scope.dgChoice) scope.dgChoice = scope.$parent[scope.dgModel] || scope.dgPlaceholder;

                }
            };
        })
}
)();
