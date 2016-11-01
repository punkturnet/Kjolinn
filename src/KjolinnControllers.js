(function(){
'use strict';

    angular.module('KjolinnApp')
    .controller('HomeController', HomeController)
    .controller('AllController', AllController)
    .controller('DepartmentController', DepartmentController)
    .controller('DivisionController', DivisionController);

    HomeController.$inject = ['$rootScope', 'myinfo'];
    function HomeController($rootScope, myinfo){
        var homeCtrl = this;
        $rootScope.Username = 'Ásgeir Freyr Kristinsson';
        homeCtrl.myInfo = myinfo;
    }

    AllController.$inject = ['KjolinnService'];
    function AllController(KjolinnService){
        var ctrl = this;
        ctrl.myInfo = KjolinnService.GetMyInfo();
    }

    DepartmentController.$inject = ['KjolinnService', 'items'];
    function DepartmentController(KjolinnService, items){
        var depCtrl = this;
        depCtrl.items = items;
    }

    DivisionController.$inject = ['KjolinnService'];
    function DivisionController(KjolinnService){
        var ctrl = this;
        ctrl.myInfo = KjolinnService.GetMyInfo();
    }

})();
