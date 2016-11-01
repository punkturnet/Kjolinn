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
          return _.where(competitors, {name: $rootScope.Username});
        };

        service.getAll = function(){

        };

        service.getByDepartment = function(department){

        };

        service.getByDivision = function(division){

        };
    }

})();
