"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Component(config) {
    return function (targetClass) {
        let tc = new targetClass();
        return class {
            constructor() {
                this.title = tc.title;
                this.dom = config.selector;
                this.view = config.template;
            }
        };
    };
}
let MyFirstComponent = class MyFirstComponent {
    constructor() {
        this.title = "Welcome to your life";
    }
};
MyFirstComponent = __decorate([
    Component({
        selector: 'app-root',
        template: `
        <h1>Hello from my first comoponent</h1>
        <h2>Message is : {{ message }}</h2>
    `
    })
], MyFirstComponent);
;
addEventListener("load", function () {
    let comp = new MyFirstComponent();
    let temp = comp.view.replace("{{ message }}", comp.title);
    document.getElementsByTagName(comp.dom)[0].innerHTML = temp;
});
