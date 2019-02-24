import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'inputNg',
    template: `
        <mat-form-field>
            <input matInput placeholder="Value for link" [value]="id" (input)="updateLink($event)">
        </mat-form-field>

        <br>

        <a [routerLink]="urlPrefix" [queryParams]="{init3: value}">Go with {{ value }}</a>
    `,
})
export class InputNg2Component implements OnInit {
    @Input() id: string = '';
    public urlPrefix = 'ng2router/input';
    public value = '';

    ngOnInit(): void {
        this.value = this.id;
    }

    updateLink($event): void {
        this.value = $event.target.value;
    }
}