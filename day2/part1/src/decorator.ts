function addPower(num:number){
    return function(targetClass:any){
        return class{
            title = new targetClass().title;
            power = num
        }
    }
}
@addPower(5) class Hero{
    title = "Bruce"
}



let hero = new Hero();
console.log(hero.title, hero.power);