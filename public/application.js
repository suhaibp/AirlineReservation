'use strict';

var app = angular.module('lotusAirline', [
    'ngRoute',
    'ngSanitize',
    'lotusAirline.search',
    'lotusAirline.ticketResults',
    'lotusAirline.passengerInfor',
    'lotusAirline.submition']);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'views/search-flight.html',
        controller: 'SearchCtrl'

    }).when('/ticket-results', {
        templateUrl: 'views/ticket-result.html',
        controller: 'TicketCtrl'

    }).when('/get-passengers-information', {
        templateUrl: 'views/passenger-information.html',
        controller: 'PassengersCtrl'

    }).when('/search', {
        templateUrl: 'views/submition.html',
        controller: 'SubmitionCtrl'

    }).otherwise({
        redirectTo: '/'
    });
}]);

