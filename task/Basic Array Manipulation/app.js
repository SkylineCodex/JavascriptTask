// Task 1 Create an array with five fruit names and print the second element.
let fruits=["Apple","Cherry","Banana","orange","Watermelon"];
console.log("2nd element of the array",fruits[1]);
// Task 2 Replace the third element of an array with "Mango" and print the updated array.
fruits[2]="Mango";
console.log("the third element is replace by Mango",fruits);
// Task 3 Create an empty array and add three colors to it using push(). Print the array.
let color =[];
console.log("Empty array",color);
color.push("RED","GreeN","Yellow");
console.log("Add Three color to the Empty array",color);
// Task 4  Remove the last element of an array using pop() and print the removed element.
let removed_colors=["Red","blue","Orange"];
console.log("origanl Array",removed_colors);
let removed_color=removed_colors.pop();
console.log("Removed the last element",removed_color);
console.log(removed_colors);
// Task 5  Add two numbers at the beginning of an array using unshift() and print the array.
let number =[10,20,30];
console.log(number);
number.unshift(5,15);
console.log(number);
// Task 6 Remove the first element of an array using shift() and print the updated array.
let vegetable=["Onian","Tomato","potato"];
console.log(vegetable);
vegetable.shift();
console.log(vegetable);
//  Task 7 Print the length of an array containing four elements.
let book = ["Computer","Bio","Phy","Che"];
console.log(book.length);
// Task 8 Extract the last two elements from an array using slice() and print them.
let cold_drink=["Pepsi","7Up","string","Dew"];
console.log(cold_drink);
let last_two_drink=cold_drink.slice(-2);
console.log(last_two_drink);
// Task 9 Extract the middle element(s) of an array with an even number of elements using
//   slice().
let Hardware=["Usb","Mouse","keyboard","Vga","HDMI","SSD"]
let midIndex1 = Hardware.length / 2 - 1;
let midIndex2 = Hardware.length / 2;
let middleElements = Hardware.slice(midIndex1, midIndex2 + 1);
console.log("orignal Array",Hardware);
console.log("middle Element",middleElements);
// Task 10   Replace two middle elements in an array using splice() and print the updated array.
let software=["Word","excel","powerpoint","Acsess","skype"];
console.log("Orignal Array",software);
let midIndex_1 = Math.floor(software.length / 2) - 1;
let midIndex_2 = Math.floor(software.length / 2);
software.splice(midIndex1, 2, "Notepad", "Chrome");

console.log("Updated array",software);


