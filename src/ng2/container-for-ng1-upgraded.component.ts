import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {filter, map} from 'rxjs/operators';

@Component({
    selector: 'container-ng1',
    template: `<inputNg1 [id]="id"></inputNg1>`,
})
export class ContainerForNg1UpgradedComponent implements OnInit {
    public id: string;

    constructor(public activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.id = `${Math.floor(Math.random() * 10) + 1}`;

        this.activatedRoute.queryParams.pipe(
            filter(({ init3 }) => !!init3),
            map(({ init3 }) => init3),
        ).subscribe(value => this.id = value);
    }
}