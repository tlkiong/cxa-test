(function () {
    'use strict';
    
	angular.module('DataView', [])
		.config(function ($stateProvider) {
			$stateProvider
				.state('data_view', {
                    url: '/data_view',
                    params: {
                        data: null
                    },
                    views: {
                        'main': {
                            templateUrl: './modules/dataView/dataView.html',
                            controller: 'dataViewController',
                            controllerAs: 'vm'
                        }
                    }
                });
		})
})();