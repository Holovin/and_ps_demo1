import {Directive, ElementRef, Injector} from '@angular/core';
import {UpgradeComponent} from '@angular/upgrade/static';

@Directive({
    selector: 'inputNg1'
})
export class InputNg1To2UpComponent extends UpgradeComponent {
    constructor(elementRef: ElementRef, injector: Injector) {
        super('inputNg1Component', elementRef, injector);
    }
}
