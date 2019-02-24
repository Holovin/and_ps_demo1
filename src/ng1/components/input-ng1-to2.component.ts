import {Directive, ElementRef, Injector, Input} from '@angular/core';
import {UpgradeComponent} from '@angular/upgrade/static';

@Directive({
    selector: 'inputNg1'
})
export class InputNg1To2UpComponent extends UpgradeComponent {
    @Input() id: string;

    constructor(elementRef: ElementRef, injector: Injector) {
        super('inputNg1Component', elementRef, injector);
    }
}
