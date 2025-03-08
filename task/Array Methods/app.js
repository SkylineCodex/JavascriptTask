// Task 11 Create an array of three cities and add a new city at the end using push()
let city =["peshawar","Lahore","Kohat"];
console.log("three city are",city);
city.push("Mardan");
console.log("Updated array",city);
// Task 12  Remove the last city from an array using pop() and print the updated array.
city.pop();
console.log("Remove the last city",city);
// Task 13 Add two new colors to the beginning of an array using unshift() and print the array.
let color=["Red","orange","Blue","Green"]
console.log("the color is ",color);
color.unshift("Black","Yellow");
console.log( "The New color is Added ",color);
// Task 14 Remove the first color from an array using shift() and print the removed color.
let removedcolor=color.shift();
console.log("The remove color is:",removedcolor);
// Task 15  Use push() twice to add two new names to an array and print the array
let names=["Ali","Jawad","Kamran"];
console.log(names);
names.push("Jamal");
names.push("Kamal");
console.log("The Upadated Array",names);
// Task 16 Use pop() on an array of five elements and check if the length is now four
let fruits=["Apple","Banana","Orange","Mango","graphes"];
console.log("The Five Array Element Are",fruits);
fruits.pop();
if(fruits.length===4){
    console.log("The Array now Has Four Element",fruits);

}
else{
   console.log( "Something went wrong: The Array Length is:",fruits.length);
};
// Task 17  Use shift() on an array with three elements and print the updated array.
let student_name =["Ali","Jamal","Kamal"];
console.log("The Array Element is:",student_name);
student_name.shift();
console.log("The Updated Array is:",student_name);
// Task 18 Use unshift() to add a new number at the beginning of an array and print it
let city_Name =["Peshawar","Kohat","Lahore"];
console.log("the Array Element is :", city_Name);
city_Name.unshift("Multan","Mardan");
console.log("The Updated Array is ",city_Name);
// Task 19  Create an array of three numbers, remove the last one using pop(), and print the
//remaining array.
let numbers= [1,2,3];
console.log("The Array Element is:",numbers);
numbers.pop();
console.log("the Last element of Array is removed",numbers);
// Task 20  Create an array with three elements, remove the first using shift(), and print the
//updated array.
let Book_Name =["Computer","Bilogy","Physics"];
console.log("The array Element",Book_Name);
Book_Name.shift();
 console.log("The First Element of Array is Removed ",Book_Name);