const alternateCase = require('../katas/alternate-case.js');

// if  passed  empty string, return empty string

describe("alternateCase",()=>{
    test("a passed empty string should return an empty string", () => {
        let returnValue = alternateCase("");
        expect(returnValue).toBe("")
    });
    test("a passed string of 1 capital  letter should return that capital letter", () => {
        let returnValue2 = alternateCase("A");
        expect(returnValue2).toBe("A")
    });
    test("a single lower case letter should return that letter capitalised", () => {
        let returnValue3 = alternateCase("a");
        expect(returnValue3).toBe("A")
    });
    test("a capital letter followed by a lower case letter should return the same string", () => {
        let returnValue4 = alternateCase("Aa");
        expect(returnValue4).toBe("Aa")
    });
    test("a lowercase letter followed by a capital letter should return the opposite capitalisation", () => {
        let returnValue5 = alternateCase("aA");
        expect(returnValue5).toBe("Aa")
    });
    test("a string length greater than 2 returns alternating capitalisation", () => {
        let returnValue6 = alternateCase("aaa");
        expect(returnValue6).toBe("AaA")
    });
    test("a string length with several chars returns alternating capitalisation", () => {
        let returnValue7 = alternateCase("abcdefghij");
        expect(returnValue7).toBe("AbCdEfGhIj")
    });
    test("whitespace characters should not affect capitalisation", () => {
        let returnValue8 = alternateCase("ab c");
        expect(returnValue8).toBe("Ab C");
        returnValue8 = alternateCase("hello world");
        expect(returnValue8).toBe("HeLlO wOrLd");
        returnValue8 = alternateCase("hello  world");
        expect(returnValue8).toBe("HeLlO  wOrLd");
        returnValue8 = alternateCase("hello  world hello");
        expect(returnValue8).toBe("HeLlO  wOrLd HeLlO");
    });
})