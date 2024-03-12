const areOrdered = require('../katas/are-ordered.js');

describe("areOrdered",()=>{
    test("an empty array should return false", () => {
        let input = [];
        let actual = areOrdered(input)
        let expected = false 
        expect(actual).toBe(expected)
    });
    test("a single number should return true", () => {
        let input = [1];
        let actual = areOrdered(input)
        let expected = true; 
        expect(actual).toBe(expected)
    });
    test("an array of 2 digits in ascending order returns true", () => {
        let input = [1,2];
        let actual = areOrdered(input)
        let expected = true; 
        expect(actual).toBe(expected)
    });
    test("an array of 2 digits in descending order returns false", () => {
        let input = [9,8];
        let actual = areOrdered(input)
        let expected = false; 

        expect(actual).toBe(expected)
    });
    test("an array of 2 same digits returns true", () => {
        let input = [5,5];
        let actual = areOrdered(input)
        let expected = true; 

        expect(actual).toBe(expected)
    });
    test("an array of several single digit numbers in ascending order returns true", () => {
        let input = [1,2,4,5];
        let actual = areOrdered(input)
        let expected = true; 
        expect(actual).toBe(expected)
    });
    test("an array of several single digit numbers in mixed order returns false", () => {
        let input = [9,1,2,4,5];
        let actual = areOrdered(input)
        let expected = false; 
        expect(actual).toBe(expected)
    });
    test("an array of numbers of different digits in ascending order returns true", () => {
        let input = [1,2,4,5,10];
        let actual = areOrdered(input)
        let expected = true; 
        expect(actual).toBe(expected)
    });
    test("an array of numbers of different digits in mixed order returns false", () => {
        let input = [10,2,4,5];
        let actual = areOrdered(input)
        let expected = false; 
        expect(actual).toBe(expected)
    });
})
