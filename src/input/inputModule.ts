import * as angular from 'angular';
import {downgradeComponent} from '@angular/upgrade/static';
import {InputNg2Component} from "../ng2/input-ng2.component";

export const InputModule = angular
    .module('InputModule', [
        'ui.router',
    ]);

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
            template: '[empty ng1]'
        })

        .state('empty2', {
            url: '/ng2/*',
            template: '[empty ng1]'
        })
}]);

InputModule.directive('inputNg', downgradeComponent(
    {
        component: InputNg2Component,
        inputs: ['id'],
    }) as angular.IDirectiveFactory
);