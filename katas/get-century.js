function getCentury(year) {

    let century = ""
    let yearAtStr = ""
    let firstDigit = ""
    let centuryNumber = 0

    if(year < 100)
    {
        return "1st"
    }

    if(year < 200)
    {
        return "2nd"
    }

    if(year < 300)
    {
        return "3rd"
    }

    if(year < 1000)
    {
        yearAtStr = year.toString();
        firstDigit = yearAtStr.slice(0,1)
        centuryNumber = Number(firstDigit) + 1

        century = centuryNumber.toString() + "th"

        return century

    }

    yearAtStr = year.toString();
    firstTwoDigits = yearAtStr.slice(0,2)
    centuryNumber = Number(firstTwoDigits) + 1

    century = centuryNumber.toString() + "th"

    return century

}

module.exports = getCentury;
