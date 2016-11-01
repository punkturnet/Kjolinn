(function () {
"use strict";

angular.module('KjolinnApp')
.component('competitorTable', {
  templateUrl: 'src/view/competitor-table.html',
  bindings: {
    competitors: '<'
  },
  controller: CompetitorController
});


CompetitorController.$inject = ['ApiPath'];
function CompetitorController(ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
}

})();
