(function(){
'use strict';

    angular.module('KjolinnApp')
    .service('KjolinnService', KjolinnService);

    KjolinnService.$inject = ['$http'];
    function KjolinnService($http){
        var service = this;

        service.getMyInfo = function(user){

        };

        service.getAll = function(){

        };

        service.getByDepartment = function(department){

        };

        service.getByDivision = function(division){

        };
    }

})();
