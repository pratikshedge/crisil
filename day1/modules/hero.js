import { Person } from "./person.js";
export class Hero extends Person{
    title = "";
    fname = "";
    lname = "";
    _mission = "my secret mission";
    static version = 101;
    constructor(htitle, hfname, hlname, hmessage){
        super( hmessage );
        this.title = htitle;
        this.fname = hfname;
        this.lname = hlname;
    }
    fullname(){
        return this.fname+" "+this.lname;
    }
    get mission(){
        return this._mission;
    }
    set mission(nmission){
        this._mission = nmission;
    }
};
