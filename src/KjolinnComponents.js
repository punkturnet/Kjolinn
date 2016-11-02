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
  $ctrl.sort = {column : 'finalper', descending: false};

  $ctrl.sortMe = function(column){
    if ($ctrl.sort.column == column) {
        $ctrl.sort.descending = !$ctrl.sort.descending;
        if($ctrl.sort.descending) { $ctrl.sort.column = '-' + $ctrl.sort.column; } else { $ctrl.sort.column.replace('-',''); }
    } else {
        $ctrl.sort.column = column;
        $ctrl.sort.descending = false;
    }
  };

  $ctrl.parseNums = function(item){
    item.finalweight = parseFloat(item.finalweight);
    item.finalper = parseFloat(item.finalper);
    item.w1weight = parseFloat(item.w1weight);
    item.w1per = parseFloat(item.w1per);
    item.w2weight = parseFloat(item.w2weight);
    item.w2per = parseFloat(item.w2per);
    item.w3weight = parseFloat(item.w3weight);
    item.w3per = parseFloat(item.w3per);
  };
}

})();
