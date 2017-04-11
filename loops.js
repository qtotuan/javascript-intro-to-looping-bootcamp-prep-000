function forLoop(arr) {
  arr.push("I am 1 strange loop.")
  for (var i = 1; i < 25; i++) {
    arr.push(`I am ${i} strange loops.`)
  }
  return arr
}


function whileLoop(num) {
  while (num > 0) {
    console.log(num--);
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while (maybeTrue() && array.length > 0)
  return array
}

