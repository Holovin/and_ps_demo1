import {Component} from '@angular/core';

@Component({
    selector: 'container-ng1',
    template: `
        тут текст > <ng1up></ng1up>
    `,
})
export class ContainerForNg1UpgradedComponent {
    constructor() {
    }
}