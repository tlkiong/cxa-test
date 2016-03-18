(function() {
    'use strict';
    
    angular.module('DataView')
        .controller('dataViewController', dataViewController);

    dataViewController.$inject = ['dataViewService', 'commonService'];

    function dataViewController(dataViewService, commonService) {
        var vm = this;

        /* ======================================== Var ==================================================== */
        vm.misc = {};

        /* ======================================== Services =============================================== */
        var svc = dataViewService;
        var cmnSvc = commonService;

        /* ======================================== Public Methods ========================================= */

        /* ======================================== Private Methods ======================================== */
        function init() {
            svc.getData(true).then(function(rs){
                alert('success!');
                console.log(rs);
            }, function(err){
                alert(err);
                console.log(err);
            });
        }

        init();
    }
})();