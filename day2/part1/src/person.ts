import { IPerson } from "./iperson";


class Person1 implements IPerson{
    constructor(private message:string){}
    saymessage(){
        console.log(this.message);
    }
}
class Person2 implements IPerson{
    constructor(private message:string){}
    saymessage(){
        console.log(this.message);
    }
}
class Person3 implements IPerson{
    constructor(private message:string){}
    saymessage(){
        console.log(this.message);
    }
}
class Person4 implements IPerson{
    constructor(private message:string){}
    saymessage(){
        console.log(this.message);
    }
}

// export {Person1 as Per1, Person2 as Per2}
export default Person1;