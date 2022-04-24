// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});



test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})


test("One euro should be 127,9 yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its supposed to be used
    const yen = fromDollarToYen (6);

    // if 1 euro are 127.9 yen and 1.2 euro, then the dollar to yen rate should be 127,9/1.2, and  6 dollar should be (6 * 127.9 / 1.2)
    const expected = 6 * 127.9 / 1.2; 
    
    // this is the comparison for the unit test
    expect(fromDollarToYen(6)).toBe(639.5); 
})

test("One euro should be 0.8 pounds", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const yen = fromYenToPound (159875);

    // if 1 euro are 0.8 british pounds, then the yen to pound rate should be 0.8 / 127.9, and  1500 yuan should be (1500 * 0.8 / 127.9)
    const expected = 159875 * 0.8 / 127.9; 
    
    // this is the comparison for the unit test
    expect(fromYenToPound(159875)).toBe(1000); 
})