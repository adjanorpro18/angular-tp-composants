import { Component, Input } from '@angular/core';
import { ColleguesMock } from './mock/collegues-mock';
import { Collegue } from './models/collegue';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bonjour-angular';
  unObjetCollegueFourni:Collegue = new ColleguesMock().unObjetCollegueFourni;
}
