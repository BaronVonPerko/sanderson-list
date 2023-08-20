import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListItemComponent} from '../list-item/list-item.component';
import {Item} from '../models';

@Component({
    selector: 'hocus-list',
    standalone: true,
    imports: [CommonModule, ListItemComponent],
    template: `
        <section>
            <h1>Sanderson Sister List</h1>
            <div class="items-wrapper">
                <hocus-list-item *ngFor="let item of items" [item]="item"/>
            </div>
        </section>
        <section class="bottom">
            <label for="chkDawn">Dawn is here!</label>
            <input id="chkDawn" type="checkbox">
        </section>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }

            section {
                background-image: url('../../assets/paper-bg.png');
                background-size: cover;
                width: 600px;
                margin: 0 auto;
                padding: 40px 0 0;
            }

            h1 {
                text-align: center;
                margin: 40px 0 80px;
                font-size: 3rem;
            }

            .items-wrapper {
                width: 300px;
                margin: 0 auto;
            }

            .bottom {
                text-align: center;
                font-size: 2rem;
                padding-bottom: 40px;
            }

            input[type=checkbox] {
                width: 30px;
                height: 30px;
                margin-left: 10px;
            }
        `
    ]
})
export class ListComponent {
    items: Item[] = [];
}
