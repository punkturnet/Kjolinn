(function() {
'use strict';

angular.module('KjolinnApp')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('myinfo', {
      url: '/',
      templateUrl: 'src/view/home.html',
      controller: 'HomeController',
      controllerAs: 'homeCtrl',
      resolve: {
        items: ['KjolinnService', function (KjolinnService) {
          return KjolinnService.getMyInfo();
        }]
      }
    })
    .state('department', {
      url: '/dep/{department}',
      templateUrl: 'src/view/dep.html',
      controller: 'DepartmentController',
      controllerAs: 'depCtrl',
      resolve: {
        items: ['$stateParams,','KjolinnService', function ($stateParams, KjolinnService) {
          return KjolinnService.getByDepartment($stateParams.department);
        }]
      }
    })
    .state('group', {
      url: '/group/{group}',
      templateUrl: 'src/view/group.html',
      controller: 'GroupController',
      controllerAs: 'groupCtrl',
      resolve: {
        items: ['$stateParams,','KjolinnService', function ($stateParams, KjolinnService) {
          return KjolinnService.getByDivision($stateParams.group);
        }]
      }
    })
    .state('public.myinfo', {
      url: '/list',
      templateUrl: 'src/view/list.html',
      controller: 'ListController',
      controllerAs: 'listCtrl',
      resolve: {
        items: ['KjolinnService', function (KjolinnService) {
          return KjolinnService.getAll();
        }]
      }
    });
}
})();
