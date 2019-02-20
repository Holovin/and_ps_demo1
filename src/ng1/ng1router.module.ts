import * as angular from 'angular';
import {downgradeComponent} from '@angular/upgrade/static';
import {InputNg2Component} from "../ng2/input-ng2.component";

export const Ng1routerModule = angular
    .module('Ng1RouterModule', [
        'ui.router',
    ]);

Ng1routerModule.config(['$stateProvider', ($stateProvider) => {
    $stateProvider
        .state('home', {
            url: '/ng1router/input',
            params: {
                input2: {
                    value: Math.floor(Math.random() * 10),
                    squash: true,
                },
            },
            template: `<input-ng [id]="{{input2}}" />`,
            controller: ['$stateParams', '$scope', ($stateParams, $scope) => {
                $scope.input2 = $stateParams.input2;
            }],
        })

        .state('empty', {
            url: '/{code: |ng2router/input}',
            template: ''
        })
}]);

Ng1routerModule.directive('inputNg', downgradeComponent(
    {
        component: InputNg2Component,
        inputs: ['id'],
    }) as angular.IDirectiveFactory
);