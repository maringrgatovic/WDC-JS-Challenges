/*Question 2:
Write a javascript function that takes an array of numbers and a target number.
The function should find two different numbers in the array that, when added together, give the target number.
For example: answer([1,2,3], 4)should return [1,3].*/

let answer = (array, num) => {
    let answerArray = [];

    for(let i = 0; i < array.length; i++) {
        for(let j = i+1; j < array.length; j++) {
            if (array[i] + array[j] === num && array[i] !== array[j]) {
                answerArray = [array[i], array[j]];
                return answerArray;
            }
        }
    }

    if (answerArray.length === 0)
        return "There is not a matching pair";
}

console.log(answer([1,2,3], 4));
console.log(answer([2,2,2,1,2,2,2,3], 4));
console.log(answer([31, 10, 90, 26, 78, 69], 100));
console.log(answer([5, 5, 12], 100));