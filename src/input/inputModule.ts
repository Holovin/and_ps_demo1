// This module is in the midst of transitiong from Angular 1 to Angular 2.
// We migrated MessageTextCmp to Angular2.
import * as angular from 'angular';
import {downgradeComponent} from '@angular/upgrade/static';
import {InputNg2Component} from "../ng2/input-ng2.component";

export const InputModule = angular
    .module('InputModule', [
        'ui.router',
    ]);
    // .run(['$rootScope', ($rootScope) => {
    //     $rootScope.$on('$stateChangeSuccess', () => {
    //         console.warn('event!');
    //     });
    // }]);

// InputModule.component('message', MessageCmp);
// InputModule.service('repository', Repository);
InputModule.config(['$stateProvider', ($stateProvider) => {
    $stateProvider
        .state('home', {
            url: '/ng1router/input',
            params: {
                input2: {
                    value: Math.floor(Math.random() * 10),
                    squash: true,
                },
            },
            template: ` ng1input значение для передачи {{input2}}
                        <br>
                        <input-ng [id]="{{input2}}"></input-ng>
            `,
            controller: ['$stateParams', '$scope', ($stateParams, $scope) => {
                $scope.input2 = $stateParams.input2;
            }],
        })
        .state('empty', {
            url: '/',
            template: ''
        })
        .state('empty2', {
            url: '/ng2/*',
            template: ''
        })
    // $urlRouterProvider.otherwise('/ng1');
}]);

// export function exportRepository(m: UpgradeModule): Repository {
//     return m.$injector.get('repository');
// }

// components migrated to angular 2 should be downgraded here
InputModule.directive('inputNg', downgradeComponent(
    {
        component: InputNg2Component,
        inputs: ['id'],
    }) as angular.IDirectiveFactory
);