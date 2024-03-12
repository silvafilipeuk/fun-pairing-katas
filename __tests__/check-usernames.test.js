const checkUsernames = require('../katas/check-usernames.js');

describe("checkUsernames",()=>{
    test("String of less than 5 characters should return false", () => {
        let input = "abcd";
        let actual = checkUsernames(input)
        let expected = false 
        expect(actual).toBe(expected)
    });

    test("String of 5 or more characters should return true", () => {
        let input = "abcde";
        let actual = checkUsernames(input)
        let expected = true 
        expect(actual).toBe(expected)
    });

    test("String with uppercase letters should return false", () => {
        let input = "abCde";
        let actual = checkUsernames(input)
        let expected = false 
        expect(actual).toBe(expected)
    });

    test("String with disallowed characters should return false", () => {
        let input = "ab*de";
        let actual = checkUsernames(input)
        let expected = false 
        expect(actual).toBe(expected)
    });

    test("String with underscores and no disallowed characters should return true", () => {
        let input = "ab_de";
        let actual = checkUsernames(input)
        let expected = true
        expect(actual).toBe(expected)
    });

    test("String with all allowed characters should return true", () => {
        let input = "ab1_de";
        let actual = checkUsernames(input)
        let expected = true
        expect(actual).toBe(expected)
    });
    test("String with more than 20 characters should return false", () => {
        let input = "ab1_de1234567890gdett";
        let actual = checkUsernames(input)
        let expected = false
        expect(actual).toBe(expected)
    });
})