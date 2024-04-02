const Test = function() {
    let args = [...process.argv.slice(1)];
    console.log(args);
}

const Add = function() {
    let a = process.argv[2];
    let b = process.argv[3];
    console.log(Number(a)+Number(b));
}


const obj = {
    titie:"temp",
    name:'dump',
    testArrow:() => {
        console.log(this);
    },
    testFunc(){
        console.log(this);
    }
}

const temp = {
    tempContext:obj
}

temp.tempContext.testArrow();
//obj.testFunc();

//const sampleFunc = obj.testFunc;
//sampleFunc();
module.exports = {Test, Add};