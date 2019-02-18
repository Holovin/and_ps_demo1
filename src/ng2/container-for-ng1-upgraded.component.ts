import {Component} from '@angular/core';

@Component({
    selector: 'container-ng1',
    template: `
        Это компонент на ng2
        <br>
        <inputNg1></inputNg1>
    `,
})
export class ContainerForNg1UpgradedComponent {
    constructor() {
    }
}