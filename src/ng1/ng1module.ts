import * as angular from 'angular';
import {InputNg1Component} from "./input-ng1.component";

export const Ng1Module = angular
    .module('Ng1Module', []);

Ng1Module.component('inp', InputNg1Component);
