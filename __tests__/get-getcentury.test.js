const getCentury = require('../katas/get-century.js');

// if  passed  empty string, return empty string

describe("getCentury",()=>{
    test("Years to 0 to 99 should return 1st", () => {
        let input = 39;
        let actual = getCentury(input)
        let expected = "1st" 

        expect(actual).toBe(expected)
    });

    test("Years to 100 to 199 should return 2nd", () => {
        let input = 149;
        let actual = getCentury(input)
        let expected = "2nd" 

        expect(actual).toBe(expected)
    });

    test("Years to 200 to 299 should return 3rd", () => {
        let input = 245;
        let actual = getCentury(input)
        let expected = "3rd" 

        expect(actual).toBe(expected)
    });

    test("Years to 300 to 999 should return 4th, 5th, 6th etc...", () => {
        let input = 555;
        let actual = getCentury(input)
        let expected = "6th" 

        expect(actual).toBe(expected)
    });
    
    test("Years to 1000 to 9999 should return 11th, 12th, etc...", () => {
        let input = 1839;
        let actual = getCentury(input)
        let expected = "19th" 

        expect(actual).toBe(expected)

        input = 8739;
        actual = getCentury(input)
        expected = "88th" 

        expect(actual).toBe(expected)
    });    

})