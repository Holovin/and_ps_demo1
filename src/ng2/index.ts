import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HomeNg2Component} from './home-ng2.component';
import {NotFoundNg2Component} from "./not-found-ng2.component";
import {InputNg1To2UpComponent} from "../ng1/input-ng1-to2.component";
import {ContainerForNg1UpgradedComponent} from "./container-for-ng1-upgraded.component";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: '', children: [
                    { path: '', component: HomeNg2Component },
                    { path: 'ng2router/input', component: ContainerForNg1UpgradedComponent },
                    { path: '**', component: NotFoundNg2Component },
                ],
            },
        ]),
    ],
    declarations: [
        InputNg1To2UpComponent,
        ContainerForNg1UpgradedComponent,
        HomeNg2Component,
        NotFoundNg2Component,
    ],
    exports: [
        InputNg1To2UpComponent,
        ContainerForNg1UpgradedComponent,
        HomeNg2Component,
        NotFoundNg2Component,
    ],
    providers: [
        {provide: '$scope', useExisting: '$rootScope'},
    ]
})
export class HomeNg2Module {
}

