// let val:number = 101;
// let val:(number | string | boolean) = false;
// let val:any = {}
// let vals:string[] = ['val1', 'val2'];
// let vals:any[] = ['val1', 'val2',101,false];
// let vals:Array<any> = ['val1', 'val2',101,false];
import { Hero } from "./hero.js";
import GlobalPerson from "./person.js";
/* function adder(num1:number = 0, num2:number = 0):void{
    // return num1+num2;
    console.log(num1+num2);
} */
/*
class Person{
    message:string;
    constructor(nmessage:string){
         this.message = nmessage;
    }
     saymessage(){
        console.log(this.message);
    }
}
*/
let person = new GlobalPerson("welcome to your life");
person.saymessage();
let hero = new Hero("Ironman", "Tony", "Stark", "I am Ironman");
console.log(hero.title);
console.log(hero.fname);
console.log(hero.lname);
console.log(hero.fullname());
console.log(hero.mission);
console.log(hero.message);
console.log(Hero.version);
