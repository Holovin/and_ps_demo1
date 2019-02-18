/**
 * This file defines the root module of the Angular 1 of the application.
 */

// import angular1
import * as angular from 'angular';
import uiRouter  from '@uirouter/angularjs';

// import app modules
import {InputModule} from './input/inputModule';
import {Ng1Module} from "./ng1/ng1module";

export const Ng1AppModule = angular.module('Ng1AppModule',
    [
        uiRouter,
        InputModule.name,
        Ng1Module.name,
    ]);

Ng1AppModule.config(['$locationProvider', ($locationProvider) => {
    $locationProvider.html5Mode(true)
}]);
