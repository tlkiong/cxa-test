(function() {
    'use strict';

    angular.module('DataView')
        .controller('dataViewController', dataViewController);

    dataViewController.$inject = ['$scope', '$mdMedia', '$mdDialog', 'dataViewService', 'commonService'];

    function dataViewController($scope, $mdMedia, $mdDialog, dataViewService, commonService) {
        var vm = this;
        vm.sortBy = sortBy;
        vm.resetTable = resetTable;
        vm.groupBy = groupBy;
        vm.showDetails = showDetails;

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
        var mdD = $mdDialog;
        var mdMedia = $mdMedia;

        /* ======================================== Public Methods ========================================= */
        function showDetails(index) {
            var dataObj = {};
            angular.copy(vm.data[index], dataObj);

            delete dataObj.$$hashKey; // Remove added key by Angular during ng-repeat

            if (cmnSvc.isObjPresent(dataObj)) {
                for (var key in dataObj) {
                    if (dataObj.hasOwnProperty(key)) {
                        if (key === 'contactnumber') {
                            var tmpList = [];
                            dataObj[key].forEach(function(e) {
                                tmpList.push('(' + e.phoneType + ') ' + e.phone);
                            });
                            dataObj[key] = tmpList;
                        } else if (key === 'friends') {
                            var tmpList = [];
                            dataObj[key].forEach(function(e) {
                                tmpList.push(e.name);
                            });

                            dataObj[key] = tmpList;
                        } else if (key === 'name') {
                            dataObj[key] = dataObj[key].first + ' ' + dataObj[key].last;
                        } else if (key === 'tags') {
                            dataObj[key] = dataObj[key];
                        }
                    }
                }

                console.log('list: ',dataObj);

                var fullscreen = ($mdMedia('sm') || $mdMedia('xs')) && ($mdMedia('xs') || $mdMedia('sm'));
                mdD.show({
                        controller: dialog,
                        templateUrl: './modules/dataView/dataDetails.html',
                        parent: angular.element(document.body),
                        // targetEvent: ev,
                        clickOutsideToClose: true,
                        locals: {
                            items: dataObj
                        },
                        fullscreen: fullscreen
                    })
                    .then(function(rs) {
                        console.log('Yeah! ', rs);
                    }, function(er) {
                        console.log('hmm')
                    });
            } else {
                $mdDialog.alert({
                    title: 'Error',
                    textContent: 'No details for the chosen data',
                    ok: 'Close'
                });
                $mdDialog
                    .show(alert)
                    .finally(function() {
                        alert = undefined;
                    });
            }
        }

        function groupBy() {

        }

        function resetTable() {
            vm.misc.orderVal = '';
            vm.misc.searchTxt = '';
            vm.misc.groupByCol = '';
            vm.misc.isReversed = false;
        }

        function sortBy(type, isReverse) {
            if (cmnSvc.isObjPresent(type) && cmnSvc.isObjPresent(isReverse)) {
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
        function dialog($scope, $mdDialog, items) {
            /* =========== Var =========== */
            $scope.items = items;

            /* ===== Public Methods ====== */
            $scope.hide = hide;
            $scope.cancel = cancel;

            function hide(val) {
                $mdDialog.hide(val);
            };

            function cancel() {
                $mdDialog.cancel();
            };
        }

        function init() {
            svc.getData(true).then(function(rs) {
                angular.copy(rs.data, vm.data);
            }, function(err) {
                alert('Error!');
                console.log(err);
            });
        }

        init();
    }
})();