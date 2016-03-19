(function() {
    'use strict';
    
    angular.module('DataView')
        .controller('dataViewController', dataViewController);

    dataViewController.$inject = ['dataViewService', 'commonService'];

    function dataViewController(dataViewService, commonService) {
        var vm = this;
        vm.sortBy = sortBy;
        vm.resetTable = resetTable;
        vm.groupBy = groupBy;

        /* ======================================== Var ==================================================== */
        vm.misc = {
            searchTxt: '',
            orderVal: '',
            groupByCol: '',
            isReversed: false
        };
        vm.data = [];

        /* ======================================== Services =============================================== */
        var svc = dataViewService;
        var cmnSvc = commonService;

        /* ======================================== Public Methods ========================================= */
        function groupBy() {
            
        }

        function resetTable() {
            vm.misc.orderVal = '';
            vm.misc.searchTxt = '';
            vm.misc.groupByCol = '';
            vm.misc.isReversed = false;
        }

        function sortBy(type, isReverse) {
            if(cmnSvc.isObjPresent(type) && cmnSvc.isObjPresent(isReverse)) {
                if (type === 'firstName') {
                    vm.misc.orderVal = 'name.first';
                } else if (type === 'lastName') {
                    vm.misc.orderVal = 'name.last';
                } else if (type === 'companyName') {
                    vm.misc.orderVal = 'company';
                } else if (type === 'emailAddress') {
                    vm.misc.orderVal = 'email';
                } else if (type === 'eyeColor') {
                    vm.misc.orderVal = 'eyeColor';
                } else if (type === 'isActive') {
                    vm.misc.orderVal = 'isActive';
                } else if (type === 'phoneNumber') {
                    vm.misc.orderVal = 'mainphone';
                }
                vm.misc.isReversed = isReverse;
            }
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