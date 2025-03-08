// Task 21 Extract the first three elements from an array using slice() and print them.
let number =[1,2,3,4,5,6];
console.log(number);
let First_three_num=number.slice(0,3);
console.log("First three Number of Array is :",First_three_num);
// Task 22 Extract elements from index 2 to 4 using slice() and print them. 
let two_to_Four=number.slice(2,4);
console.log("The number from two to Four is:",two_to_Four);
// Task 23 Remove two elements from an array starting from index 1 using splice().
let cites =["Lahore","multan","Karchi","peshawar","Mardan","Malakand"];
console.log("The array Element is:",cites);
cites.splice(1,2);
console.log("The  Two Element is remove ",cites);
// Task 24 Insert "Lemon" and "Orange" at index 2 in an array using splice() and print the
//updated array.
let fruit  =["Apple","Mango","Banana","Grahpes"];
console.log("The array Element is ", fruit);
fruit.splice(2,0,"Lemon","Orange");
console.log("The orange and Lemon is added to the array",fruit);

// Task 25 Remove the last two elements using splice() and print the modified array.
let vegetable =["potato","Toamto","Onian","Broccoli","Bell pepper"];
console.log("The  Array Element is :",vegetable);
vegetable.splice(-2,2);
console.log("The Last Two Element is Removed from the Array",vegetable);

// Task 26 Use splice() to add three new numbers at the beginning of an array and print the
//array.
let Student_num =[4,5,6,7,8];
console.log("The origanal Array is ",Student_num);
Student_num.splice(0,0,1,2,3);
console.log("The Three Number is Added At the Begining of the Array",Student_num);

// Task 27 Create an array with six elements, extract the last four using slice(), and print them.
let color =["Red","Green","Blue","White","Orange","Yellow"];
console.log("The array is :",color);
lastFourColor=color.slice(-4);
console.log("The Last Four Element Of array is:",lastFourColor);
// Task 28 Use slice() on an array and check if the original array remains unchanged.
let names=["Ali","Khan","Jan","Jamal","kashif"];

Student_Slice=names.slice(1,4);
console.log("The Orignal Array is:", names);
console.log("The  slice  Array is",Student_Slice);


// Task 29  Use splice() to remove one element from the middle of an array and print the
//updated array.
let student_Id=[1,2,3,4,5];
console.log(student_Id);
let middleindex=Math.floor(student_Id.length/2);
student_Id.splice(middleindex,1);
console.log("The middle Number is remove",student_Id)


// Task 30  Use splice() to replace two elements in an array and print the modified array.
let items= ["Apple", "Banana","Mango","Graphes","Orange"];
console.log("The orignal array is :", items);
items.splice(1,2,"Water Melon","Pine apple");
console.log("The updated array is ", items);
