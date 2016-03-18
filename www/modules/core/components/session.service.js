(function() {
    
    'use strict';
    
    angular.module('Core')
        .service('sessionService', sessionService);

    sessionService.$inject = ['commonService'];

    function sessionService(commonService) {
        var service = this;
        service.isUserLoggedIn = isUserLoggedIn;

        /* ======================================== Var ==================================================== */
        service.userData = {            
            
        };

        /* ======================================== Services =============================================== */

        /* ======================================== Public Methods ========================================= */
        function isUserLoggedIn() {
            // Check if user is logged in
        }

        /* ======================================== Private Methods ======================================== */
        function init() {
            
        }

        init();
    }

})();
