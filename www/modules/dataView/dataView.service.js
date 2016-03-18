(function() {
	'use strict';
	
	angular.module('DataView')
		.service('dataViewService', dataViewService);

		dataViewService.$inject = ['httpRequestService', 'commonService'];
		function dataViewService(httpRequestService, commonService) {
			var service = this;
			service.getData = getData;

			/* ======================================== Var ==================================================== */

	        /* ======================================== Services =============================================== */
	        var cmnSvc = commonService;
	        var httpSvc = httpRequestService;

	        /* ======================================== Public Methods ========================================= */
	        function getData(isSample) {
	        	var deferred = cmnSvc.$q.defer();

	        	if(isSample == true) {
	        		httpSvc.http('get_sample_data').then(function(rs){
	        			deferred.resolve(rs);
	        		}, function(err) {
	        			deferred.reject(err);
	        		})
	        	}

	        	return deferred.promise;
	        }

	        /* ======================================== Private Methods ======================================== */
		}

})();