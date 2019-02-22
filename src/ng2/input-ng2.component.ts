import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'inputNg',
    template: `        
        <mat-form-field>
            <input matInput placeholder="Значение" [value]="id" (change)="updateLink($event)">
        </mat-form-field>
    
        <br>
        
        <a [routerLink]="urlPrefix" [queryParams]="{init3: _routerLink}">Road to ng2 router</a>
    `,
})
export class InputNg2Component implements OnInit {
    @Input() id: string = '';
    public urlPrefix = 'ng2router/input';
    public _routerLink = '';

    ngOnInit(): void {
    }

    updateLink($event): void {
        this._routerLink = $event.target.value;
    }
}
