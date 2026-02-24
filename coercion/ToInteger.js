// Simulated ToInteger (based on ECMAScript ToIntegerOrInfinity)
function toInteger(value) {
    console.log("Input:", value);

    // Step 1: Convert to Number
    let number = Number(value);
    console.log("After ToNumber:", number);

    // Step 2: Handle special cases
    if (Number.isNaN(number)) {
        console.log("Result (NaN case):", 0);
        console.log("----------------------");
        return 0;
    }

    if (number === 0 || number === Infinity || number === -Infinity) {
        console.log("Result (0 or Infinity case):", number);
        console.log("----------------------");
        return number;
    }

    // Step 3: Truncate toward 0
    let result = number < 0
        ? Math.ceil(number)
        : Math.floor(number);

    console.log("Result (Truncated):", result);
    console.log("----------------------");
    return result;
}


// ===== TEST CASES =====

// Normal decimals
toInteger(4.9);
toInteger(-4.9);

// Strings
toInteger("10.75");
toInteger("abc");
toInteger("");

// Boolean
toInteger(true);
toInteger(false);

// null / undefined
toInteger(null);
toInteger(undefined);

// NaN
toInteger(NaN);

// Infinity
toInteger(Infinity);
toInteger(-Infinity);

// -0
toInteger(-0);

// Object
toInteger({ valueOf: () => 7.8 });
toInteger({});


console.log(1-"3");

console.log("5"-"%");
console.log("5"-"  ");

console.log(5+5+"4");
console.log("5"-"3"+"1"+1+"4");
console.log(5+ true);
console.log("A"+ true);
