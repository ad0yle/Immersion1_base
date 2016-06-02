angular.module('itlp-home',[])
    
    .config(function($stateProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'app/modules/home/home.html',
                    controller: 'HomeController'
                });
        })

    .controller('HomeController', function($scope,$http){
        $scope.check_credentials = function () {
            /*PUT ALL JAVASCRIPT NECESSARY TO CALL PHP FUNCTION AND CREATE DYNAMIC JS CONTENT THAT WILL BE DISPLAYED ON THE HTML PAGE HERE*/
        }
    });

