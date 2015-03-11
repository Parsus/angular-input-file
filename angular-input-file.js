/**
 * @license angular-input-file
 * (c) 2015 Parsus Solutions, LLC. http://parsus.com
 * License: MIT
 */
(function(window, angular, undefined) {
  'use strict';

  var ngInputFileModule = angular.module('ngInputFile', []).
                          directive('ngModel', ngModel);

  ngModel.$inject = ['$parse'];
  function ngModel($parse) {
    return {
      restrict: 'A',
      priority: 500,
      link: function(scope, element, attrs) {
        if (element[0].tagName !== 'INPUT') {
          return;
        }

        if (attrs.type !== 'file') {
          return;
        }

        element.bind('change', function(e) {
          scope.$apply(function() {
            var model = $parse(attrs.ngModel);
            model.assign(scope, e.target);
          });
        });
      }
    };
  }

})(window, window.angular);
