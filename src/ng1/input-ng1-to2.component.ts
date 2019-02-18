import {Directive, ElementRef, Injector} from "@angular/core";
import {UpgradeComponent} from "@angular/upgrade/static";

@Directive({
    selector: 'ng1up'
})
export class InputNg1To2UpComponent extends UpgradeComponent {
    constructor(elementRef: ElementRef, injector: Injector) {
        super('inp', elementRef, injector);
    }
}
