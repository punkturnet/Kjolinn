(function(){
'use strict';

    angular.module('KjolinnApp', ['ui.router'])
    .constant('ApiPath', 'https://velkomin-gamli-advania.is/....')
    .config(config);

    config.$inject = ['$httpProvider'];
    function config($httpProvider) {
      $httpProvider.interceptors.push('loadingHttpInterceptor');
    };

})();
