const sumDigits = require('../katas/sum-digits');

// Tests for sumDigits

/*
  TEST 1 - sumDigits returns the input number when passed a single digit number
  This test has two ASSERTIONS being made
  The same behaviour is being tested but with different inputs - 1 and 9

  E.g. sumDigits(1) should output 1
  E.g. sumDigits(9) should output 9
*/
describe("sumDigits for single digits",()=>{
  test("single digit should return same digit",()=>{
    const returnValue = (sumDigits(1));
    expect(returnValue).toBe(1);
  });
  test("a different single digit should return same digit",()=>{
    const returnValue2 = (sumDigits(9));
    expect(returnValue2).toBe(9);
  });
})
/*
  Once you have got the first test passing, then you can write your next one.
  If you've already handled a single digit, your next test could test for multi-digit inputs.

  E.g. sumDigits(99) should output 18
  E.g. sumDigits(123) should output 6

  HINT: Remember to see the test *fail* first, then write the code to pass the test

  Why this test?  
  A multi-digit input means you now have to implement to 'addition' part of this function,
  but you don't have to think about the logic for dealing with/ignoring non-digit characters yet
  (that's for our next test!)
*/
describe("sumDigits for multiple digits",()=>{
  test("two digit number should return sum of digits",()=>{
    const returnValue = (sumDigits(99));
    expect(returnValue).toBe(18);
  });
  test("three digit number should return sum of digits",()=>{
    const returnValue2 = (sumDigits(123));
    expect(returnValue2).toBe(6);
  });
  test("number with many digits should  return sum",()=>{
    const returnValue2 = (sumDigits(123456789));
    expect(returnValue2).toBe(45);
  })
})

/*
  Once you have successfully passed the above test, then you can write your next test.
  A good next test might be to check that your function handles non-numerical characters correctly (i.e. ignores them)
  
  E.g. sumDigits(10.5) should output 6
*/
describe("sumDigits for non-numerical characters and strings",()=>{
  test("decimal point should be ignored",()=>{
    const returnValue = (sumDigits(10.5));
    expect(returnValue).toBe(6);
  });
  test("string input should still sum digits",()=>{
    const returnValue2 = (sumDigits("12.3"));
    expect(returnValue2).toBe(6);
  });
})
