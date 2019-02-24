import * as angular from 'angular';
import {InputNg1Component} from './components/input-ng1.component';

export const Ng1Module = angular
    .module('Ng1Module', ['ngMaterial', 'ngMessages']);

Ng1Module.component('inputNg1Component', InputNg1Component);
