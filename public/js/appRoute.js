  angular.module('appRoute', []).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider.when('/', {
            templateUrl: 'views/login.html'
        });

    $locationProvider.html5Mode(true);

}]);