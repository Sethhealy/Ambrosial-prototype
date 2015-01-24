var app = angular.module("Caterme", ['ngRoute', 'xeditable','ui.bootstrap', 'firebase'])

    app.config(['$routeProvider', function($routeProvider){

        $routeProvider
        .when('/',{
            templateUrl:'Views/login.html',
            controller: 'LoginController'
        }).when('/home',{
            templateUrl:'Views/home.html',
            controller: 'HomeController'
        }).when('/signup',{
            templateUrl:'Views/signup.html',
            controller: 'LoginController'
        });
    }]);

    app.run(function(editableOptions) {
        editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
    });
