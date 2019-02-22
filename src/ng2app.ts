import {Component, NgModule, ViewEncapsulation} from "@angular/core";
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';
import {HomeNg2Module} from "./ng2";
import {InputNg2Component} from "./ng2/input-ng2.component";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import 'hammerjs';
import {RouterModule, UrlHandlingStrategy} from "@angular/router";
import {MatButtonModule, MatDatepickerModule, MatInputModule} from "@angular/material";

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
    templateUrl: './ng2app.component.html',
    styleUrls: ['./ng2app.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class Ng2Component {
    public constructor() {
    }
}

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule,
        HomeNg2Module,
        NoopAnimationsModule,
        MatButtonModule,
        MatInputModule,
        MatDatepickerModule,
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
        MatButtonModule,
        MatInputModule,
        MatDatepickerModule,
    ],
    entryComponents: [
        InputNg2Component,
    ]
})
export class Ng2AppModule {
    constructor(public upgrade: UpgradeModule) {
    }
}