const countVeg = require('../katas/count-veg.js');

// If received an empty array, should return quantity 0

describe("countVeg should count the quantity of a given type",()=>{
    test("If received an empty array, return 0", () => {
        let returnValue = countVeg([]);
        expect(returnValue).toBe(0)
    })
    test("If vegType is not in the Object, return 0", () => {
        let returnValue2 = countVeg([
            {name: 'Parsnip', type: 'root', quantity: 4},
            {name: 'Broccoli', type: 'brassica', quantity: 1},
            {name: 'Carrot', type: 'root', quantity: 5},
            {name: 'Onion', type: 'bulb', quantity: 3},
            {name: 'Chard', type: 'leaf', quantity: 3},
            {name: 'Runner beans', type: 'legume', quantity: 8}
          ], 'other');
        expect(returnValue2).toBe(0)
    })
    test("If we have 1 Object of the passed type, return the quantity of that Object", () => {
        let returnValue3 = countVeg([
            {name: 'Parsnip', type: 'root', quantity: 4},
            {name: 'Broccoli', type: 'brassica', quantity: 1},
            {name: 'Carrot', type: 'root', quantity: 5},
            {name: 'Onion', type: 'bulb', quantity: 3},
            {name: 'Chard', type: 'leaf', quantity: 3},
            {name: 'Runner beans', type: 'legume', quantity: 8}
          ], 'bulb');
        expect(returnValue3).toBe(3)
    })
    test("If we have 1 Object of the passed type, return the quantity of that Object", () => {
        let returnValue3 = countVeg([
            {name: 'Parsnip', type: 'root', quantity: 4},
            {name: 'Broccoli', type: 'brassica', quantity: 1},
            {name: 'Carrot', type: 'root', quantity: 5},
            {name: 'Onion', type: 'bulb', quantity: 3},
            {name: 'Chard', type: 'leaf', quantity: 3},
            {name: 'Runner beans', type: 'legume', quantity: 8}
          ], 'brassica');
        expect(returnValue3).toBe(1)
    })
    test("If we have more than 1 Object of the passed type, return the sum of the quantities of those Object", () => {
        let returnValue4 = countVeg([
            {name: 'Parsnip', type: 'root', quantity: 4},
            {name: 'Broccoli', type: 'brassica', quantity: 1},
            {name: 'Carrot', type: 'root', quantity: 5},
            {name: 'Onion', type: 'bulb', quantity: 3},
            {name: 'Chard', type: 'leaf', quantity: 3},
            {name: 'Runner beans', type: 'legume', quantity: 8}
          ], 'root');
        expect(returnValue4).toBe(9)
    })
   
})

