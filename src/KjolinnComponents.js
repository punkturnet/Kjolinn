(function () {
"use strict";

angular.module('KjolinnApp')
.component('competitorTable', {
  templateUrl: 'src/view/competitor-table.html',
  bindings: {
    competitors: '<'
  },
  controller: CompetitorController
});


CompetitorController.$inject = ['ApiPath'];
function CompetitorController(ApiPath) {
  var $ctrl = this;

  $ctrl.basePath = ApiPath;
  $ctrl.sort = {column : 'finalper', descending: false};

  $ctrl.sortMe = function(column){
    if ($ctrl.sort.column == column) {
        $ctrl.sort.descending = !$ctrl.sort.descending;
        if($ctrl.sort.descending) { $ctrl.sort.column = '-' + $ctrl.sort.column; } else { $ctrl.sort.column.replace('-',''); }
    } else {
        $ctrl.sort.column = column;
        $ctrl.sort.descending = false;
    }
  };

  $ctrl.parseNums = function(item){
    item.finalweight = parseFloat(item.finalweight);
    item.finalper = parseFloat(item.finalper);
    item.w1weight = parseFloat(item.w1weight);
    item.w1per = parseFloat(item.w1per);
    item.w2weight = parseFloat(item.w2weight);
    item.w2per = parseFloat(item.w2per);
    item.w3weight = parseFloat(item.w3weight);
    item.w3per = parseFloat(item.w3per);
  };
}

angular.module('KjolinnApp')
.component('loading', {
  template: '<img src="images/spinner.svg" ng-if="$ctrl.show">',
  controller: LoadingController
});


LoadingController.$inject = ['$rootScope'];
function LoadingController ($rootScope) {
  var $ctrl = this;
  var listener;

  $ctrl.$onInit = function() {
    $ctrl.show = false;
    listener = $rootScope.$on('spinner:activate', onSpinnerActivate);
  };

  $ctrl.$onDestroy = function() {
    listener();
  };

  function onSpinnerActivate(event, data) {
    $ctrl.show = data.on;
  }
}

angular.module('KjolinnApp')
.factory('loadingHttpInterceptor', LoadingHttpInterceptor);

LoadingHttpInterceptor.$inject = ['$rootScope', '$q'];
/**
 * Tracks when a request begins and finishes. When a
 * request starts, a progress event is emitted to allow
 * listeners to determine when a request has been initiated.
 * When the response completes or a response error occurs,
 * we assume the request has ended and emit a finish event.
 */
function LoadingHttpInterceptor($rootScope, $q) {

  var loadingCount = 0;
  var loadingEventName = 'spinner:activate';

  return {
    request: function (config) {
      // console.log("Inside interceptor, config: ", config);

      if (++loadingCount === 1) {
        $rootScope.$broadcast(loadingEventName, {on: true});
      }

      return config;
    },

    response: function (response) {
      if (--loadingCount === 0) {
        $rootScope.$broadcast(loadingEventName, {on: false});
      }

      return response;
    },

    responseError: function (response) {
      if (--loadingCount === 0) {
        $rootScope.$broadcast(loadingEventName, {on: false});
      }

      return $q.reject(response);
    }
  };
}


})();
