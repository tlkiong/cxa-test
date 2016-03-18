(function() {
    'use strict';
    
    angular.module('DataView')
        .controller('dataViewController', dataViewController);

    dataViewController.$inject = ['commonService'];

    function dataViewController(commonService) {
        var vm = this;

        /* ======================================== Var ==================================================== */
        vm.misc = {};

        /* ======================================== Services =============================================== */
        var cmnSvc = commonService;

        /* ======================================== Public Methods ========================================= */

        /* ======================================== Private Methods ======================================== */
        function init() {
            
        }

        init();
    }
})();