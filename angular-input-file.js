/**
 * @license angular-input-file
 * (c) 2015 Parsus Solutions, LLC. http://parsus.com
 * License: MIT
 */
(function(window, angular, undefined) {
  'use strict';

  var ngInputFileModule = angular.module('ngInputFile', []).
                          directive('ngModel', ngModel);

  function ngModel() {
    return {
      restrict: 'A',
      priority: 500,
      link: function(scope, element, attr) {
        if (element[0].tagName !== 'INPUT') {
          return;
        }

        if (attr.type !== 'file') {
          return;
        }

        element.bind('change', function(e) {
          var fr = new FileReader();
          fr.onload = function(e) {
            scope.$apply(function() {
              scope[attr.ngModel] = e.target.result;
            });
          };
          fr.readAsDataURL(e.target.files[0]);
        });
      }
    };
  }

})(window, window.angular);
