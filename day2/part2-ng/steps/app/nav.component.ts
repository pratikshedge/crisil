import { Component } from "@angular/core";

@Component({
    selector : 'app-nav',
    template : `
        <h1> Navigation Component </h1>
    `,
    styles : [`
        h1{
            background-color : yellow;
            padding : 20px;
            margin : 10px;
        }
    `]
})
export class NavComp{}