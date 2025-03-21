// 1️⃣ Define the initial array of cats
const cats = ["Milo", "Otis", "Garfield"];

// 2️⃣ Destructive Functions (Modify the Original Array)
function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

// 3️⃣ Non-Destructive Functions (Return a New Array)
function appendCat(name) {
  return [...cats, name]; // Creates a new array with name appended
}

function prependCat(name) {
  return [name, ...cats]; // Creates a new array with name prepended
}

function removeLastCat() {
  return cats.slice(0, -1); // Returns a new array without the last cat
}

function removeFirstCat() {
  return cats.slice(1); // Returns a new array without the first cat
}

// 🚨 **REMOVE any test-related console logs or function calls in this file**
