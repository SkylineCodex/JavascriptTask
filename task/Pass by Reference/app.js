// Task 31. Assign an array to another variable and modify the original array. Print both variables.
let number =[1,2,3,4,,5];

let updatednumber=number;
number.push(6);
console.log("The orignal number is:",number);
console.log("The updated array is",updatednumber);



//  Task 32. Create a function that adds an element to an array and check if the original array
//changes.
function addelement(arr,element){
    arr.push(element);

}
let numbers =[10,20,30];
console.log("Before The Function",numbers);
addelement(numbers,40);
console.log("After function",numbers);

//  Task33. Pass an array to a function, modify its first element, and print the modified array.
function fruit_Name (arr,element) {
arr[0]=element;


  }
  let fruit=["Apple","Banana","Orange","Mango"];
  console.log("Before the ", fruit);
  fruit_Name(fruit,"Pineapple");
  console.log("After The ",fruit);
// Task34. Create an array, pass it to another variable, modify the second variable, and print both.
let mynumber=[1,2,3,4,5];
let mynewnumber=mynumber;
mynewnumber[1]=32;
console.log("Orignal Array",mynumber);
console.log("Updated array",mynewnumber);


// Task 35. Check if two variables referencing the same array are equal after modifying one.
console.log("Are Both veriable are equal",mynumber===mynewnumber);

// Task 36. Create an array, pass it to a function that removes an element, and print the result.
function removeElement(arr,index){
arr.splice(index,1);


}
let student_Num=[1,2,3,4,5];
console.log("Before the",student_Num);
removeElement(student_Num,2);
console.log("After the ",student_Num);


// Task 37. Store an array in two different variables, modify one using push(), and print both.
let originalArray = [1, 2, 3, 4, 5];
let newArray = originalArray;
newArray.push(6);
console.log("Original Array:", originalArray);
console.log("Modified Array:", newArray);

//  Task 38. Use pop() on an array inside a function and see if the original array changes.

function removeLastElement(arr) {
    arr.pop(); }
let studentnumbers = [10, 20, 30, 40, 50];
console.log("Before function call:", studentnumbers);
removeLastElement(studentnumbers);
console.log("After function call:", studentnumbers);


//  Task 39. Pass an array to a function that changes its length and check the effect.

function changeArrayLength(arr, newLength) {
    arr.length = newLength; 
}

let vegetable = ["Onian","potato","tomato"];
console.log("Before function call:", vegetable);
changeArrayLength(vegetable, 2);
console.log("After function call:", vegetable);


// Task 40. Create two separate arrays with identical elements and check if they are strictly equal.

let array1 = [1, 2, 3, 4, 5];
let array2 = [1, 2, 3, 4, 5];


console.log("Are the arrays strictly equal?", array1 === array2);
