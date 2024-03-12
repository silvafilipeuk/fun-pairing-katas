function areOrdered(arr) {
    if (arr.length === 0){
        return false;
    }

    const sortedArray = [...arr].sort((a, b) => a - b)
    if (sortedArray.toString() !==  arr.toString()){
        return false;
    } 
    return true;
}

module.exports = areOrdered;
