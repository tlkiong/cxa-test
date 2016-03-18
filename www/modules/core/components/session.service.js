(function() {
    
    'use strict';
    
    angular.module('Core')
        .service('sessionService', sessionService);

    sessionService.$inject = [];

    function sessionService() {
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
