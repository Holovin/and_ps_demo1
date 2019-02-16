import {Component, Input} from '@angular/core';

@Component({
    selector: 'inputNg',
    template: `input-ng2 получено значение: {{id}}!`,
})
export class InputNg2Component {
    @Input() id: string = '';

    constructor() {
        // TODO
    }
}