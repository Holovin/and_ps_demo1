import {NgModule, Component, InjectionToken} from '@angular/core';
import {NavigationEnd, Router, RouterEvent, RouterModule, UrlHandlingStrategy} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';

import {HomeNg2Module} from "./ng2";
import {InputNg2Component} from "./ng2/input-ng2.component";
import {$ROOT_SCOPE} from "@angular/upgrade/static/src/common/constants";
import {InputNg1To2UpComponent} from "./ng1/input-ng1-to2.component";
import {ContainerForNg1UpgradedComponent} from "./ng2/container-for-ng1-upgraded.component";

export class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
    shouldProcessUrl(url) {
        return !url.toString().startsWith("/ng1router");
    }

    extract(url) {
        return url;
    }

    merge(url, whole) {
        return url;
    }
}

@Component({
    selector: 'ng2',
    template: `
        <div style="width: 1000px; margin: 0 auto; font-size: 18px;">
            Hybrid app running!
            <br>
            <a routerLink="">Home</a>

            <hr>

            <router-outlet></router-outlet>

            <hr>
            <div ui-view></div>
        </div>
    `,
})
export class Ng2Component {
    public constructor(
        private router: Router,
    ) {
        this.router.events.subscribe((event: RouterEvent) => {
            if (event instanceof NavigationEnd) {
                // console.warn('GOTO: ', event.urlAfterRedirects);
            }
        });
    }
}

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule,
        HomeNg2Module,
        // We don't need to provide any routes.
        // The router will collect all routes from all the registered modules.
        RouterModule.forRoot([])
    ],
    providers: [
        {
            provide: UrlHandlingStrategy,
            useClass: Ng1Ng2UrlHandlingStrategy
        },
    ],

    bootstrap: [Ng2Component],
    declarations: [
        Ng2Component,
        InputNg2Component,
    ],
    exports: [
        Ng2Component,
        InputNg2Component,
    ],
    entryComponents: [
        InputNg2Component,
    ]
})
export class Ng2AppModule {
    constructor(public upgrade: UpgradeModule) {
    }
}