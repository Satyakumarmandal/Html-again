//conversion of data types
let num="";
let isLogIn=Number(num); 
// console.log(isLogIn);
// console.log(typeof (isLogIn));
// console.log(String(isLogIn));
// console.log(typeof (String(isLogIn)));
// console.log(Boolean(num));
// let age=18;
// console.log(typeof (String(age)));
// console.log("satya"+" "+"teja"); //concatination of strings in  case first string id string and second is string with space
//console.log(12+"22"); //concatination of strings in case both are numbers but in string format
//console.log(12+ + "22"); //addition of numbers in case both are numbers but in string format
// exmaple convertion 
// let priceStr = "₹1999"; 
// let price = parseInt(priceStr.replace("₹", ""), 10);

// let discountPrice = price * 0.9; // 10% off
// console.log("Discounted Price:", discountPrice); // 1799.1
// console.log(typeof discountPrice);

// let dateStr = "2025-12-25";
// let dateObj = new Date(dateStr);

// console.log(dateObj.toDateString()); // Thu Dec 25 2025

// let isActiveStr = "true";
// let isActive = (isActiveStr === "true");

// console.log(isActive); // true
// console.log(typeof isActive); // boolean
// let jsonData = 
// '{"name":"Shreyansh","age":22,"isStudent":true}';
// let userObj = JSON.parse(jsonData);

// console.log(userObj.name); // Shreyansh
// console.log(userObj.age + 1); // 23
// console.log(userObj.isStudent); // true 
// javaScript data two type permitive and non primitive
// primitive types : number , string , boolean , null , undefined , symbol , bigInt
// this is permitive type  called as value types and cannot changed value( immutable)
// non primitive types : object , array , function retunen types = object
// let age=22; //number
// two type of mermory allocation
// stack memory - small size data types - permitive types
// heap memory - large size data types - non permitive types
// stact memory example    
let userName="satya teja"; //string
let otherName=userName; //copy by value
otherName="shreyansh";

// console.log(userName); //satya teja
// console.log(otherName); //shreyansh
// Heap memory example  
// heap memory changed ther fore both values are changed  
// let user={
//     name:"satya teja",
//     age:22
// };
// let otherUser=user; //copy by reference
// otherUser.name="shreyansh";
// console.log(user.name); //shreyansh
// console.log(otherUser.name); //shreyansh    



