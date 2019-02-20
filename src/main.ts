// import polyfills
import 'core-js/es7/reflect'
import 'zone.js/dist/zone'

// import angular2 dpes
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {setUpLocationSync} from '@angular/router/upgrade';
import {Ng1AppModule} from './ng1app';
import {Ng2AppModule} from './ng2app';
import {setAngularJSGlobal} from "@angular/upgrade/static";

// @ts-ignore
import angular from 'angular';
//

/**
 * We bootstrap the Angular 2 module first, and then, once it's done,
 * bootstrap the Angular 1 module.
 */
setAngularJSGlobal(angular);
platformBrowserDynamic().bootstrapModule(Ng2AppModule).then(ref => {
    const upgrade = (<any>ref.instance).upgrade;

    // bootstrap angular1
    upgrade.bootstrap(document.body, [Ng1AppModule.name], { strictDi: true });
    setUpLocationSync(upgrade);
});
