function result (percentage){
    if(percentage > 100 || percentage < 0){
        console.log("enter a vaild percentage from 0 to 100")
    }else if (percentage >= 50){
        console.log(`Congratulations you percentage of ${percentage} is enough for you to pass`)
    }else {
        console.log(`unfortunately your percentage of ${percentage} is not enough for you to pass`)
    }
}
result(67)