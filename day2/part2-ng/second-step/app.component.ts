import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template : `
    <h1 (click)="clickHandler()">{{ title }}</h1>
    <h1 innerHTML="{{ title }}"></h1>
    <h1 innerText="{{ title }}"></h1>
    <h1 textContent="{{ title }}"></h1>
    <h1 [textContent]="title"></h1>
    <h1 bind-textContent="title"></h1>
    <hr>
    <input #ti1 [value]="title" type="text" (input)="title = ti1.value" >
    {{ title }}
    <p class="{{ selectedStyle }}">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores veniam eveniet incidunt placeat tenetur, laudantium tempora distinctio ad? Aliquam odit, reiciendis rem amet voluptatibus blanditiis ducimus perspiciatis ipsa maxime architecto?
    </p>
    <p [class]="selectedStyle">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores veniam eveniet incidunt placeat tenetur, laudantium tempora distinctio ad? Aliquam odit, reiciendis rem amet voluptatibus blanditiis ducimus perspiciatis ipsa maxime architecto?
    </p>
    <button (click)="changeColorHandler()">Change the Color</button> 
    <div [style.border]="prop">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo consequuntur suscipit doloremque iusto quos esse repellat officiis, provident quia est quis eligendi cupiditate voluptatum modi nam assumenda dolor necessitatibus nesciunt!
    </div>
  `,
  styles : [`
  .redBox{
    width : 600px;
    height : 200px;
    background-color : crimson;
    color : papayawhip;
    text-align : center;
  }
  .blueBox{
    width : 600px;
    height : 200px;
    background-color : darkblue;
    color : white;
    text-align : center;
  }
  `]
})
export class AppComponent {
  title = 'welcome to your life';
  // prop = 'border : 10px dashed orange';
  prop = '10px dashed orange';
  selectedStyle = 'redBox';
  clickHandler(){
    alert("you clicked me")
  }
  changeColorHandler(){
    this.selectedStyle = 'blueBox';
  }
}
