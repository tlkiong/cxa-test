(function() {
    'use strict';
    
    angular.module('DataView')
        .controller('dataViewController', dataViewController);

    dataViewController.$inject = ['dataViewService', 'commonService'];

    function dataViewController(dataViewService, commonService) {
        var vm = this;
        vm.sortBy = sortBy;

        /* ======================================== Var ==================================================== */
        vm.misc = {
            searchTxt: '',
            sortBy: ''
        };
        vm.data = [];

        /* ======================================== Services =============================================== */
        var svc = dataViewService;
        var cmnSvc = commonService;

        /* ======================================== Public Methods ========================================= */
        function sortBy(type, isAscending) {
            
        }

        /* ======================================== Private Methods ======================================== */
        function init() {
            svc.getData(true).then(function(rs){
                angular.copy(rs.data, vm.data);
            }, function(err){
                alert('Error!');
                console.log(err);
            });
        }

        init();
    }
})();