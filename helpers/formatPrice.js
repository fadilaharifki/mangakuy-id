function formatPrice(value){
    value = `${value}`
    let price= ''
    for(let i=value.length-1; i >= 0;i--){
        price += value[i]
    }
    let format = ''
    for(let i=0;i<price.length;i++){
        if(price.length%3 === 0 || price.length%2 === 0){
            if((i+1)%3 === 0 && (i+1)!== price.length){
                format += price[i]+'.'
            } else {
                format += price[i]
            }
        } else {
            if((i+1)%3 === 0 && (i+1)!== price.length){
                format += price[i]+'.'
            } else {
                format += price[i]
            }
        }
    }

    let result = ''
    for(let i=format.length-1; i >= 0;i--){
        if(i === format.length-1){
            result += 'Rp. '+format[i]
        } else {
            result += format[i]
        }
    }

    return result
}

module.exports=formatPrice