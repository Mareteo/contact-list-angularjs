angular.module('myApp', ['ngRoute', 'myApp.page1', 'myApp.page2', 'myApp.page3', 'myApp.page4'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
      redirectTo: 'Page1'
    })
    .otherwise({ redirectTo: 'page1' });
  }]);
