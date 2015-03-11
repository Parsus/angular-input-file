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
      terminal: true,
      priority: 400,
      link: function(scope, element, attr) {
      }
    };
  }

})(window, window.angular);
