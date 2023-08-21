import {Component, computed, effect, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Item} from '../models';

@Component({
    selector: 'hocus-list',
    standalone: true,
    imports: [CommonModule],
    template: `
        <section>
            <h1>Sanderson Sister List</h1>
            <div class="items-wrapper">
                <p *ngFor="let item of items" [class.strike]="item.complete" (click)="toggleItemComplete(item)">{{item.text}}</p>
            </div>
        </section>
        <section class="bottom">
            <label for="chkDawn">Dawn is here!</label>
            <input id="chkDawn" type="checkbox" [value]="isDawn" (click)="toggleDawnFlag()">
        </section>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                background-image: url('../../assets/paper-bg.png');
                background-size: cover;
                width: 600px;
                margin: 0 auto;
            }

            section {
                padding: 40px 0 0;
                color: brown;
            }

            h1 {
                text-align: center;
                margin: 40px 0 80px;
                font-size: 3rem;
                text-shadow: 2px 2px 1px black;
            }

            h2 {
                text-align: center;
                text-shadow: 2px 2px 1px black;
            }

            .items-wrapper {
                width: 300px;
                margin: 0 auto;
                background-color: rgba(255,255,255,0.3);
                padding: 20px;
            }

            .bottom {
                text-align: center;
                font-size: 2rem;
                padding: 40px 0;
                margin-top: 20px;
                background-color: rgba(255,255,255,0.3);
            }

            input[type=checkbox] {
                width: 30px;
                height: 30px;
                margin-left: 10px;
            }
            
            p {
                font-size: 1.5rem;
                font-weight: bold;
                cursor: pointer;
            }

            .strike {
                text-decoration: line-through;
            }
        `
    ]
})
export class ListComponent {
    items: Item[] = [
        {text: 'Find the book', complete: false},
        {text: 'Brew the potion', complete: false},
        {text: 'Suck the lives out of the children of Salem before sunrise', complete: false},
    ];

    isDawn = false;

    constructor() {
    }

    toggleDawnFlag = () => this.isDawn = !this.isDawn;

    toggleItemComplete(item: Item) {
        item.complete = !item.complete;
    }
}
