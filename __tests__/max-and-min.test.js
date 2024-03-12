const maxMin = require('../katas/max-and-min.js');

/* TESTS FOR THE max() Function */ 
describe("checkMax",()=>{
    test("An empty array should return zero", () => {
        let input = [];
        let expected = 0;

        let actual = maxMin.max(input)
       
        expect(actual).toEqual(expected)
    });
    test("An array with one element, should return that element", () => {
        let input = [1];
        let expected = 1;

        let actual = maxMin.max(input)
       
        expect(actual).toEqual(expected)
    });
    test("An array with two elements, should return the bigger one", () => {
        let input = [1,5];
        let expected = 5;

        let actual = maxMin.max(input)
       
        expect(actual).toEqual(expected)
    });
    test("An array with more than 2 elements, should return the biggest one", () => {
        let input = [1,5,10,3,99,33];
        let expected = 99;

        let actual = maxMin.max(input)
       
        expect(actual).toEqual(expected)
    });

    test("Testing for purity", () => {
        let input = [1,5,10,3,99,33];
        let inputCopy = [1,5,10,3,99,33];

        maxMin.max(input)
       
        expect(input).toEqual(inputCopy)
    });


})



/* TESTS FOR THE min() Function */ 
describe("checkMin",()=>{
    test("An empty array should return zero", () => {
        let input = [];
        let expected = 0;

        let actual = maxMin.min(input)
       
        expect(actual).toEqual(expected)
    });
    
    test("An array with one element, should return that element", () => {
        let input = [1];
        let expected = 1;

        let actual = maxMin.min(input)
       
        expect(actual).toEqual(expected)
    });

    test("An array with two elements, should return the smaller one", () => {
        let input = [2,50];
        let expected = 2;

        let actual = maxMin.min(input)

        expect(actual).toEqual(expected)
    })

    test("An array with more than two elements, should return the smallest one", () => {
        let input = [2,50,99,100,3,1,53,-1];
        let expected = -1;

        let actual = maxMin.min(input)

        expect(actual).toEqual(expected)
    })

    test("Testing for purity", () => {
        let input = [1,5,10,3,99,33];
        let inputCopy = [1,5,10,3,99,33];

        maxMin.min(input)
       
        expect(input).toEqual(inputCopy)
    });

})