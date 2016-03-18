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
            orderVal: '',
            isReversed: false
        };
        vm.data = [];

        /* ======================================== Services =============================================== */
        var svc = dataViewService;
        var cmnSvc = commonService;

        /* ======================================== Public Methods ========================================= */
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
            } else {
                vm.misc.orderVal = '';
                vm.misc.isReversed = false;
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