// import polyfills
import 'core-js/es7/reflect'
import 'zone.js/dist/zone'

// import angular2 deps
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {Ng2AppModule} from './ng2app';
import {setAngularJSGlobal} from '@angular/upgrade/static';

// @ts-ignore
import angular from 'angular';
//

setAngularJSGlobal(angular);
platformBrowserDynamic().bootstrapModule(Ng2AppModule);
