(function(){
'use strict';

    angular.module('KjolinnApp')
    .controller('IndividualController', IndividualController)
    .controller('IndividualController', IndividualController)
    .controller('IndividualController', IndividualController)
    .controller('IndividualController', IndividualController);

    IndividualController.$inject = ['KjolinnService'];
    function IndividualController(KjolinnService){
        var ctrl = this;
        ctrl.myInfo = KjolinnService.GetMyInfo();
    }

    AllController.$inject = ['KjolinnService'];
    function AllController(KjolinnService){
        var ctrl = this;
        ctrl.myInfo = KjolinnService.GetMyInfo();
    }

    DepartmentController.$inject = ['KjolinnService'];
    function DepartmentController(KjolinnService){
        var ctrl = this;
        ctrl.myInfo = KjolinnService.GetMyInfo();
    }

    DivisionController.$inject = ['KjolinnService'];
    function DivisionController(KjolinnService){
        var ctrl = this;
        ctrl.myInfo = KjolinnService.GetMyInfo();
    }

})();
