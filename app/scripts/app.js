'use strict';

/**
 * @ngdoc overview
 * @name gr8app2016App
 * @description
 * # gr8app2016App
 *
 * Main module of the application.
 */
angular
  .module('gr8conf2016', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'smoothScroll',
    'angular-parallax',
    'angular-carousel',
    'config',
    'ui.bootstrap',
    'autoActive'
  ])
  .config(['$routeProvider', '$locationProvider', 'CONFERENCE', 'ENV', 'API', function ($routeProvider, $locationProvider, CONFERENCE, ENV, API) {
    var base = 'views/' + CONFERENCE.base;
    $routeProvider
      .when('/', {
        templateUrl: base + '/front.html',
        controller: 'FrontCtrl',
        scroll: 'top'
      })
      .when('/front', {
        templateUrl: base + '/front.html',
        controller: 'FrontCtrl',
        scroll: 'page'
      })
      .when('/codeofconduct', {
        templateUrl: base + '/codeOfConduct.html',
        controller: 'CodeOfConductCtrl',
        scroll: 'page'
      })
      .when('/travel', {
        templateUrl: base + '/travel.html',
        controller: 'TravelCtrl',
        scroll: 'page'
      })
      .when('/venue', {
        templateUrl: base + '/venue.html',
        controller: 'VenueCtrl',
        scroll: 'page'
      })
      .when('/sponsors', {
        templateUrl: base + '/sponsors.html',
        controller: 'SponsorsCtrl',
        scroll: 'page'
      })
      .when('/cfp', {
        templateUrl: base + '/cfp.html',
        controller: 'CfpCtrl',
        scroll: 'page'

      })
      .when('/speakers', {
        templateUrl: base + '/speakers.html',
        controller: 'SpeakersCtrl',
        scroll: 'page'
      })
      .when('/speaker/:twitterHandle', {
        templateUrl: base + '/speaker.html',
        controller: 'SpeakerCtrl',
        scroll: 'page'
      })
      .when('/talks', {
        templateUrl: base + '/talks.html',
        controller: 'TalksCtrl',
        scroll: 'page'
      })
      .when('/talk/:id', {
        templateUrl: base + '/talk.html',
        controller: 'TalkCtrl',
        scroll: 'page'
      })
      .when('/agenda', {
        templateUrl: base + '/agenda.html',
        controller: 'AgendaCtrl',
        scroll: 'page'
      })
      .when('/agenda/:currentDay', {
        templateUrl: base + '/agenda.html',
        controller: 'AgendaCtrl',
        scroll: 'page'
      })
      .when('/about', {
        templateUrl: base + '/about.html',
        controller: 'AboutCtrl',
        scroll: 'page'
      })
      .when('/registration', {
        templateUrl: base + '/registration.html',
        controller: 'RegistrationCtrl',
        scroll: 'page'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
angular
  .module('gr8conf2016').run(['$rootScope', 'smoothScroll', 'backendService', 'CONFERENCE', function ($rootScope, smoothScroll, backendService, CONFERENCE) {
    $rootScope.scrollToTop = function () {
      var element = document.getElementById('page');
      smoothScroll(element, {offset: 50});
    };
    $rootScope.conferenceName = CONFERENCE.name;
    $rootScope.eventImageCss = 'event-' + CONFERENCE.base;
    $rootScope.logoUrl = 'views/' + CONFERENCE.base + '/templates/logo.html';
    $rootScope.menuUrl = 'views/' + CONFERENCE.base + '/templates/menu.html';
    $rootScope.eventUrl = 'views/' + CONFERENCE.base + '/templates/event.html';
    $rootScope.blogUrl = 'views/' + CONFERENCE.base + '/templates/blog.html';
    $rootScope.socialsUrl = 'views/' + CONFERENCE.base + '/templates/socials.html';
    $rootScope.contactsUrl = 'views/' + CONFERENCE.base + '/templates/contacts.html';
    $rootScope.technologiesUrl = 'views/templates/technologies.html';
    $rootScope.technologies = [
      {id: 1, img: 'groovy', title: "Groovy", url: "http://groovy-lang.org"},
      {id: 2, img: 'grails', title: "Grails", url: "http://grails.org"},
      {id: 3, img: 'ratpack', title: "Ratpack", url: "https://ratpack.io"},
      {id: 4, img: 'spock', title: "Spock", url: "http://spockframework.org"},
      {id: 5, img: 'geb', title: "Geb", url: "http://gebish.org"},
      {id: 6, img: 'angularjs', title: "AngularJS", url: "http://angularjs.org"}
    ];
    backendService.bootstrap();
  }]);
