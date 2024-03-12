
function getScore(string)
{
    // Gets the ASCII score of a given string,
    // by spliting it to an array and applying the reduce method on it.

    return string.split("").reduce((acc, curr) => acc + curr.charCodeAt(), 0);
}

function sumAscii(array) {

    let currentScoreArray = []

    for(let i = 0; i < array.length; i++)
    {   
        currentScoreArray.push(getScore(array[i]))
    }

    // Returns the corresponded name of array at the index 
    // of the highest score on currentScoreArray

    return array[currentScoreArray.indexOf(Math.max(...currentScoreArray))]

}


module.exports = sumAscii;
