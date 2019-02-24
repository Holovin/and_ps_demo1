import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UpgradeModule} from '@angular/upgrade/static';
import {Ng1AppModule} from '../ng1app';
import {setUpLocationSync} from '@angular/router/upgrade';

@Component({
    selector: 'ng2',
    templateUrl: './ng2.component.html',
    styleUrls: ['./ng2.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class Ng2Component implements OnInit {
    public constructor(private upgrade: UpgradeModule) {
    }

    ngOnInit() {
        this.upgrade.bootstrap(document.body, [Ng1AppModule.name], {strictDi: true});
        setUpLocationSync(this.upgrade);
    }
}
