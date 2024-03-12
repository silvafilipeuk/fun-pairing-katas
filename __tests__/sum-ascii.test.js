const sumAscii = require('../katas/sum-ascii.js');

// If the array have just one string should return the string
// If the array have two strings of one char each, return the higher one
// If the array have two strings of any length, return the one with higher score
// If the array have many strings of any length, return the one with higher score
// Checks por purity

describe("sumAscii()", ()=>{
    test("If the array have just one string, should return that string.",()=>{
        let input = ["String"];
        let expected = "String";
        let actual = sumAscii(input);

        expect(actual).toBe(expected)
    })

    test("If the array have two strings of one char each, return the higher one",()=>{
        let input = ["j","n"];
        let expected = "n";
        let actual = sumAscii(input);
        
        expect(actual).toBe(expected)
    })

    test("If the array have more than 2 strings of one char each, return the higher one",()=>{
        let input = ["n","j", "h", "o"];
        let expected = "o";
        let actual = sumAscii(input);
        
        expect(actual).toBe(expected)
    })

    test("If the array have more than 2 strings of any lenght, return the higher one",()=>{
        let input = ["John","Filipe", "Daniel"];
        let expected = "Filipe";
        let actual = sumAscii(input);
        
        expect(actual).toBe(expected)
    })

    test("Checking for purity",()=>{
        let input = ["John","Filipe", "Daniel"];
        let inputCopy = ["John","Filipe", "Daniel"];
        sumAscii(input);
        
        expect(input).toEqual(inputCopy)
    })




})