function makeTea(){
    return new Promise((resolve,reject)=>{
        // resolve("Green Tea")
        reject("sugar is not available")
    })
}

makeTea().then((tea)=>{
    console.log(tea + " is ready");
    return 5;
}).then((spoon)=>{
    console.log("Enjoy your tea with " + spoon + " spoons of sugar");
}).catch(error=>console.log("unable to make tea "+error))