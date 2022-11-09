/*Question 1: 
Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
make a function that organizes these into individual array that is ordered. 
For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]*/


let array1 = [1,3,1,2];
let array2 = ["100", "25", "3"];
let array3 = [1001, 10, "12", -2, "6", "7", 100];
let array4 = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

let splitNumberArray = (array) =>  {
    return array.filter(el => typeof el === 'number');
}

let splitStringArray = (array) => {
    return array.filter(el => typeof el === 'string');
}

let sortNumArray = (array) => {
    return array.sort((a,b) => a-b);
}

let sortStringArray = (array) => {
    array = array.map(el => +el);
    array.sort((a,b) => a-b);
    return array.map(el => el.toString());
}

let finishArray = (array) => {
    let finishedArray = [];
    let temp = [];
    temp.push(array[0]);
    array.shift();

    while(array.length > 0){
        if(array[0] === temp[0]) {
            temp.push(array[0]);
            array.shift();
        }
        else {
            temp.length === 1 ? finishedArray.push(temp[0]) : finishedArray.push(temp);
            temp = [];
            temp.push(array[0]);
            array.shift();
        }
    }

    temp.length === 1 ? finishedArray.push(temp[0]) : finishedArray.push(temp);
    return finishedArray;   
}

let checkForUndefined = (array) => {
    if(array.length === 1 && array[0] === undefined) {
        array = [];
    }
    return array;
}


let answer = (array) => {
    let numArray = sortNumArray(splitNumberArray(array));
    let strArray = sortStringArray(splitStringArray(array));
    let endNumArray = checkForUndefined(finishArray(numArray));
    let endStrArray = checkForUndefined(finishArray(strArray));
    
    return [endNumArray, endStrArray];
}


console.log(answer(array1));
console.log(answer(array2));
console.log(answer(array3));
console.log(answer(array4));