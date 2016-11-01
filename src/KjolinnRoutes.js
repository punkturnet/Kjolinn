(function() {
'use strict';

angular.module('KjolinnApp')
.config(routeConfig);

routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function routeConfig ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  // Routes
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/view/home.html',
      controller: 'HomeController',
      controllerAs: 'homeCtrl',
      resolve: {
        myinfo: ['KjolinnService', function (KjolinnService) {
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
