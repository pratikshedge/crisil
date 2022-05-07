import { Component } from "@angular/core";

@Component({
    selector : 'app-main',
    template : `
        <div>
            <h1> Main Component </h1>
            <app-article></app-article>
            <app-article></app-article>
        </div>
    `,
    
    styles : [`
        div{
            background-color : orange;
            padding : 20px;
            margin : 10px;
        }
        h1{
            background-color : silver;
            padding : 10px;
            margin : 10px;
        }
    `]
})
export class MainComp{}