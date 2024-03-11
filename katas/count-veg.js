function countVeg(vegArray, vegType) {

    let counter = 0;

    for(let i = 0; i < vegArray.length; i++)
    {
        if(vegArray[i].type === vegType)
        {
            counter += vegArray[i].quantity
        }
    }

    return counter;
}

module.exports = countVeg;
