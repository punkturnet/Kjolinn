(function() {
'use strict';

angular.module('KjolinnApp')
.config(routeConfig);

routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function routeConfig ($stateProvider, $urlRouterProvider) {

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
      url: '/department/{department}',
      templateUrl: 'src/view/dep.html',
      controller: 'DepartmentController',
      controllerAs: 'depCtrl',
      resolve: {
        items: ['KjolinnService', '$stateParams', function (KjolinnService, $stateParams) {
          return KjolinnService.getByDepartment($stateParams.department);
        }]
      }
    })
    .state('division', {
      url: '/division/{division}',
      templateUrl: 'src/view/div.html',
      controller: 'DivisionController',
      controllerAs: 'divCtrl',
      resolve: {
        items: ['KjolinnService', '$stateParams', function (KjolinnService, $stateParams) {
          return KjolinnService.getByDivision($stateParams.division);
        }]
      }
    })
    .state('all', {
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

    $urlRouterProvider.otherwise('/');
}
})();
