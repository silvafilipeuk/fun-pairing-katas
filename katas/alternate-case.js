function alternateCase(str) {
    let properlyCapitalisedString = "";
    let stringPosition = 0;
    for (let i = 0; i < str.length; i++){
        if(str[i]=== " "){
            properlyCapitalisedString += " ";
        } else{
            if(stringPosition % 2 === 0){
                properlyCapitalisedString += str[i].toUpperCase();
                stringPosition ++;
            } else {
                properlyCapitalisedString += str[i].toLowerCase();
                stringPosition ++;
        }
    }
    }
    return properlyCapitalisedString;
}

module.exports = alternateCase;
