import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template : `
  <div>
    <h1>{{ title }}</h1>
    <app-header></app-header>
    <app-nav></app-nav>
    <app-main></app-main>
  </div>
  `,
  styles : [`
    div{
      border : 2px solid red;
      padding : 10px;
      margin : 10px auto;
      width : 900px;
      
    }
  `]
})
export class AppComponent {
  title = 'Welcome to your life';
}
