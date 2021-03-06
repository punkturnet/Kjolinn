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
          return _.where(competitors, {name: 'Ásgeir Freyr Kristinsson'});
        };

        service.getAll = function(){
          return competitors;
        };

        service.getByDepartment = function(department){
          return _.where(competitors, {depnumber: department});
        };

        service.getByDivision = function(division){
          console.log('division');
          return _.where(competitors, {divshort: division});
        };
    }

})();
