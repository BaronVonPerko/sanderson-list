import {Component} from '@angular/core';
import {ListComponent} from './list/list.component';

@Component({
  selector: 'hocus-root',
  standalone: true,
  imports: [ListComponent],
  template: `
    <main>
      <hocus-list/>
    </main>
  `,
  styles: [`
    main {
      background-image: url('../assets/spooky_night_sky.png');
      background-size: 750px;
      background-repeat: repeat;
      height: 100vh;
      padding: 80px 0 0;
    }
  `],
})
export class AppComponent {
  title = 'sanderson-list';
}
