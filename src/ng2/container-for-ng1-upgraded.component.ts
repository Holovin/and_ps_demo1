import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'container-ng1',
    template: `
        Это компонент на ng2
        <br>
        <inputNg1 [number] = "number" ></inputNg1>
    `,
})
export class ContainerForNg1UpgradedComponent implements OnInit{
    number: number;

    constructor() {
    }

    ngOnInit(): void {
        this.number = Math.floor(Math.random() * 10);
    }
}
