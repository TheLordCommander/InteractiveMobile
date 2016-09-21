  angular.module('appRoute', []).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider.when('/', {
            templateUrl: 'views/mobile.html'
        });

    $locationProvider.html5Mode(true);

}]);