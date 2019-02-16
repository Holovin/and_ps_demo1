import {Component} from '@angular/core';

@Component({
    selector: 'home-ng2',
    template: `<a routerLink="ng1router/input">Переход на input [ng1 router]</a>
               <br>
               <a routerLink="ng2router/input">Переход на input [ng2 router]</a>
    `,
})
export class HomeNg2Component {
    constructor() {
    }
}