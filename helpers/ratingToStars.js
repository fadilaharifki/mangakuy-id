function retingToStars(value){
    let result = ''
    for(let i=0; i<5;i++){
        if(i<+value/2){
            result += '⭐'
        } else {
            result += '⚝'
        }
    }
    return result
}

module.exports=retingToStars