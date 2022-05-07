function Component(config:any){
    return function(targetClass:any){
        let tc = new targetClass();
        return class{
            title = tc.title;
            dom = config.selector;
            view = config.template;
        }
    }
}

@Component({
    selector : 'app-root',
    template : `
        <h1>Hello from my first comoponent</h1>
        <h2>Message is : {{ message }}</h2>
    `
})
class MyFirstComponent{
    title = "Welcome to your life";
};

addEventListener("load", function(){
    let comp = new MyFirstComponent();
    let temp = comp.view.replace("{{ message }}", comp.title);
    document.getElementsByTagName(comp.dom)[0].innerHTML = temp;
})
