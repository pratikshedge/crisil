import MyPerson from "./person.js";
export class Hero extends MyPerson {
    constructor(title, fname, lname, hmessage) {
        super(hmessage);
        this.title = title;
        this.fname = fname;
        this.lname = lname;
        this._mission = "my secret mission";
    }
    fullname() {
        return this.fname + " " + this.lname;
    }
    get mission() {
        return this._mission;
    }
    set mission(nmission) {
        this._mission = nmission;
    }
}
Hero.version = 101;
;
