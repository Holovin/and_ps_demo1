import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HomeNg2Component} from './home-ng2.component';
import {NotFoundNg2Component} from "./not-found-ng2.component";
import {InputNg2UpgradedComponent} from "./input-ng2-upgraded.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: '', children: [
                    { path: '', component: HomeNg2Component },
                    { path: 'ng2router/input', component: InputNg2UpgradedComponent},
                    { path: '**', component: NotFoundNg2Component },
                ],
            },
        ])
    ],
    declarations: [
        InputNg2UpgradedComponent,
        HomeNg2Component,
        NotFoundNg2Component,
    ]
})
export class HomeNg2Module {
}