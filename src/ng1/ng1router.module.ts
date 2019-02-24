import * as angular from 'angular';
import {downgradeComponent} from '@angular/upgrade/static';
import {InputNg2Component} from '../ng2/input-ng2.component';

export const Ng1routerModule = angular
    .module('Ng1RouterModule', [
        'ui.router',
    ]);

Ng1routerModule.config(['$stateProvider', ($stateProvider) => {
    $stateProvider
        .state('ng1router', {
            url: '/ng1router/input?init2',
            params: {
                init2: {
                    value: `${Math.floor(Math.random() * 10) + 1}`,
                    squash: false,
                },
            },
            template: `<input-ng [id]="{{init2}}" />`,
            controller: ['$stateParams', '$scope', ($stateParams, $scope) => {
                $scope.init2 = $stateParams.init2;
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