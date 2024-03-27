import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [
    `
      .moreThan4 {
        color: white;
      }
    `,
  ],
})
export class AppComponent {
  showInfo = false;
  logs = [];

  onShowInfo() {
    this.logs.push('Clicked: ' + this.showInfo + '/' + new Date());
    this.showInfo = !this.showInfo;
  }

  getColor() {
    return this.logs.length >= 5 ? 'blue' : '';
  }
}
