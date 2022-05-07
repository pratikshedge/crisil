import { Component } from "@angular/core";

@Component({
    selector : 'app-header',
    template : `
        <h1>
            Header Component
        </h1>
    `,
    styles : [`
        h1{
            background-color : yellow;
            padding : 20px;
            margin : 10px;
        }
    `]
})
export class HeaderComp{}