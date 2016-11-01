(function(){
'use strict';

    angular.module('KjolinnApp')
    .service('KjolinnService', KjolinnService);

    KjolinnService.$inject = ['$http', '$rootScope'];
    function KjolinnService($http, $rootScope){
        var service = this;
        var competitors = data.competitors;

        service.getMyInfo = function(){
          //TODO Fetch data from website
          //console.log('getMyInfo', data.competitors, $rootScope.Username);
          return _.where(competitors, {name: 'Ásgeir Freyr Kristinsson'});
        };

        service.getAll = function(){
          return competitors;
        };

        service.getByDepartment = function(department){
          return _.where(competitors, {dep: department});
        };

        service.getByGroup = function(group){
          return _.where(competitors, {group: group});
        };
    }

})();
