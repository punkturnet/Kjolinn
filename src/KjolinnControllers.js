(function(){
'use strict';

    angular.module('KjolinnApp')
    .controller('HomeController', HomeController)
    .controller('ListController', ListController)
    .controller('DepartmentController', DepartmentController)
    .controller('DivisionController', DivisionController);

    HomeController.$inject = ['$rootScope', 'myinfo'];
    function HomeController($rootScope, myinfo){
        var homeCtrl = this;
        $rootScope.Username = 'Ásgeir Freyr Kristinsson';
        homeCtrl.myInfo = myinfo;
    }

    ListController.$inject = ['KjolinnService','items'];
    function ListController(KjolinnService, items){
        var listCtrl = this;
        listCtrl.items = items;
    }

    DepartmentController.$inject = ['KjolinnService', 'items'];
    function DepartmentController(KjolinnService, items){
        var depCtrl = this;
        depCtrl.items = items;
    }

    DivisionController.$inject = ['KjolinnService', 'items'];
    function DivisionController(KjolinnService, items){
        var divCtrl = this;
        divCtrl.items = items;
    }

})();
