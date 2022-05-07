import { Component } from "@angular/core";

@Component({
    selector : 'app-article',
    template : `
        <h1> Article Component </h1>
    `,
    styles : [`
     h1{
            background-color : papayawhip;
            padding : 20px;
            margin : 10px;
        }
    `]
})
export class ArticleComp{}