function sumDigits(num) {

    let stringOfNum = num.toString();
    let counter = 0;

    for (let i = 0; i < stringOfNum.length; i++){
        if(stringOfNum[i].match(/[0-9]/)){
            counter += Number(stringOfNum[i]);
        }
    }
    return counter;
}

module.exports = sumDigits;
