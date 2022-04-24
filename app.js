// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)




// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

// We declare an Array with all the rates ready to operate with them
const currencyRates = Object.values(oneEuroIs);

//We declare dollar to yen rate
let dollarToYenRate = currencyRates[0] / currencyRates[1];
//console.log(dollarToYenRate);

// we declare the function with the exact name "fromDollarToYen"
const fromDollarToYen = function(valueInDollar){
    // convert the given valueInDollar to yen
    let valueInYen = valueInDollar * dollarToYenRate;
    //return the yen value
    return valueInYen;
}


//We declare yen to pound rate
let yenToPoundRate = currencyRates[2] / currencyRates[0];
//console.log(yenToPoundRate);


// we declare the function with the exact name "fromYenToPound"
const fromYenToPound = function(valueInYen){
    // convert the given valueInYen to pounds
    let valueInPound = valueInYen * yenToPoundRate;
    //return the pound value
    return valueInPound;
}



// we include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }

