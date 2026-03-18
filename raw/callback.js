function makeTea(cb){
    setTimeout(function(){
        console.log("Tea is ready");
        cb(5);
    }, 2000);
}


makeTea((spoon)=>{console.log("Enjoy your tea with " + spoon + " spoons of sugar")});