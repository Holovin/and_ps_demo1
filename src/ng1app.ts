// import angular1
import * as angular from 'angular';
import uiRouter  from '@uirouter/angularjs';

import 'angular-aria';
import 'angular-animate';
import 'angular-messages';
import 'angular-material';

// import app modules
import {Ng1routerModule} from './ng1/ng1router.module';
import {Ng1Module} from './ng1/ng1module';

export const Ng1AppModule = angular.module('Ng1AppModule',
    [
        uiRouter,
        Ng1routerModule.name,
        Ng1Module.name,
        'ngMaterial',
        'ngMessages',
    ]);

Ng1AppModule.config(['$locationProvider', ($locationProvider) => {
    $locationProvider.html5Mode(true)
}]);
