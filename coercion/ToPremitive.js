//to primitive type coercion
console.log("===== Basic valueOf Example =====");

const obj1 = {
  valueOf() {
    return 20;
  }
};

console.log(obj1 + 5); // 25


console.log("\n===== toString Example =====");

const obj2 = {
  toString() {
    return "30";
  }
};

console.log(obj2 + 5); // "305" (string concatenation)


console.log("\n===== Symbol.toPrimitive Example =====");

const obj3 = {
  [Symbol.toPrimitive](hint) {
    if (hint === "number") return 40;
    if (hint === "string") return "forty";
    return 50;
  }
};

console.log(obj3 + 5);        // 55
console.log(String(obj3));    // "forty"
console.log(Number(obj3));    // 40


console.log("\n===== Edge Case: Both valueOf and toString =====");

const obj4 = {
  valueOf() {
    return {};
  },
  toString() {
    return 60;
  }
};

console.log(obj4 + 5); // 65


console.log("\n===== Edge Case: No Primitive Returned =====");

const obj5 = {
  valueOf() {
    return {};
  },
  toString() {
    return {};
  }
};

// console.log(obj5 + 5); 
// ❌ TypeError: Cannot convert object to primitive value


console.log("\n===== Date Special Case =====");

const date = new Date();

console.log(date + 1); 
// Date prefers string conversion → string + 1


console.log("\n===== [] and {} Weird Cases =====");

console.log([] + 1);      // "1"
console.log([1] + 1);     // "11"
console.log([1,2] + 1);   // "1,21"

console.log({} + 1);      // "[object Object]1"