const obj = {
    name:"title",
    showName(){
        (()=>{
            console.log(this.name);
        })();
    }
}

obj.showName();