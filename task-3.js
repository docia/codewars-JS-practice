//https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

//https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript


//https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript

function giveMeFive(obj) {
  const newArr = [];
  for (const key in obj) {
    if (key.length === 5) {
      newArr.push(key);
    }

    if (obj[key].length === 5) {
      newArr.push(obj[key]);
    }
  }

  return newArr;
}
