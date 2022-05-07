import MyPerson from "./person.js";

export class Hero extends MyPerson implements IHero {
    private _mission:string = "my secret mission";
    static version = 101;
    constructor(
        public title:string, 
        public fname:string, 
        public lname:string, 
        hmessage:string){

        super( hmessage );
    }
    fullname():string{
        return this.fname+" "+this.lname;
    }
    get mission():string{
        return this._mission;
    }
    set mission(nmission:string){
        this._mission = nmission;
    }
};