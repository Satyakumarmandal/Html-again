// //conversion of data types
// let num="";
// let isLogIn=Number(num); 
// // console.log(isLogIn);
// // console.log(typeof (isLogIn));
// // console.log(String(isLogIn));
// // console.log(typeof (String(isLogIn)));
// // console.log(Boolean(num));
// // let age=18;
// // console.log(typeof (String(age)));
// // console.log("satya"+" "+"teja"); //concatination of strings in  case first string id string and second is string with space
// //console.log(12+"22"); //concatination of strings in case both are numbers but in string format
// //console.log(12+ + "22"); //addition of numbers in case both are numbers but in string format
// // exmaple convertion 
// // let priceStr = "₹1999"; 
// // let price = parseInt(priceStr.replace("₹", ""), 10);

// // let discountPrice = price * 0.9; // 10% off
// // console.log("Discounted Price:", discountPrice); // 1799.1
// // console.log(typeof discountPrice);

// // let dateStr = "2025-12-25";
// // let dateObj = new Date(dateStr);

// // console.log(dateObj.toDateString()); // Thu Dec 25 2025

// // let isActiveStr = "true";
// // let isActive = (isActiveStr === "true");

// // console.log(isActive); // true
// // console.log(typeof isActive); // boolean
// // let jsonData = 
// // '{"name":"Shreyansh","age":22,"isStudent":true}';
// // let userObj = JSON.parse(jsonData);

// // console.log(userObj.name); // Shreyansh
// // console.log(userObj.age + 1); // 23
// // console.log(userObj.isStudent); // true 
// // javaScript data two type permitive and non primitive
// // primitive types :Class data Number , String , Boolean , Null , Undefined , Symbol , bigInt
// // this is permitive type  called as value types and cannot changed value( immutable)
// // non primitive types : object , array , function retunen types = object
// // function return=functionobject
// // let age=22; //number
// // two type of mermory allocation
// // stack memory - small size data types - permitive types
// // heap memory - large size data types - non permitive types
// // stact memory example    
// let userName="satya teja"; //string
// let otherName=userName; //copy by value
// otherName="shreyansh";

// // console.log(userName); //satya teja
// // console.log(otherName); //shreyansh
// // Heap memory example  
// // heap memory changed ther fore both values are changed  
// // let user={
// //     name:"satya teja",
// //     age:22
// // };
// // let otherUser=user; //copy by reference
// // otherUser.name="shreyansh";
// // console.log(user.name); //shreyansh
// // console.log(otherUser.name); //shreyansh    
// //  const score=100;
// //  const balance = 11.55
//     // const score=1000000;
//     // const name="123.00";
//     // console.log(parseInt(name));
    


// // console.log( balance.toFixed(2).length); // "100.00"  toFixed(2) returns a string with 2 decimal places

// // console.log(balance.toPrecision(3)) ; // "11.6" toPrecision(3) returns a string with 3 significant digits

// // console.log(score.toLocaleString('en-IN')); // "1,000" toLocaleString('en-IN') formats the number according to Indian numbering system

// // const largeNumber = 123.568
// // console.log(Math.round(largeNumber)); round to nearest integer
// // console.log(Math.floor(largeNumber));  flooer below integer
// // console.log(Math.ceil(largeNumber)); to
// // const randomNum = Math.random()*10 // random number between 0 .and 1 (exclusive)
// // console.log(Math.floor(randomNum));

// // console.log(randomNum);
// // date  Object
// // const currentDate = new Date();
// // console.log(currentDate.toDateString()); // e.g., "Mon Jun 1 2026"


// // currentDate.setFullYear(2026, 2, 0, 14);
// // console.log(currentDate.toDateString()); // e.g., "Mon Jun 1 2025"
// // Array is also object type
// let colors=["red","green","blue"];
// let otherColors=colors;
// // otherColors.push("yellow"); add is method of array
// // console.log(otherColors);
// // otherColors.pop(); last element remove
// // console.log(otherColors);
// // otherColors.shift(); first element remove
// // console.log(otherColors);
// // otherColors.unshift("pink"); add element at first position
// // console.log(otherColors);
// // console.log(colors);
// // console.log(otherColors);
// // console.log(Array.isArray(colors)); //true
// // console.log(colors instanceof Array); //true
// // console.log(colors.length); //3  
// // console.log(colors.indexOf("green")); //1
// // console.log(colors.includes("blue")); //true
// // console.log(colors.slice(0,2)); //["red","green"] non modified original array  index 0 to index 2-1
// // console.log(colors.splice(1,1,"yellow")); //["green"] removed element modified original array
// // console.log(colors); //["red","yellow","blue"]
// // console.log(colors.join("-")); // "red-green-blue"

// // const student=[
// //     ["satya",22],
// //     ["teja",21],
// //     ["shreyansh",23],
// //     ["ajay","amit",24,25]
// // ];

// // console.log(student[3][3]); //teja
// // let accountNuber=[
// //     [234,567,890],
// //         [234,567,890],
// //     [235,567,890],

// //         [234,567,890],
// // ];
// // console.log(accountNuber[3][1]);

// // let marks = [60, 70, 80];

// // for (i = 0; i < marks.length; i++) {

// //   console.log(marks[i]);
// // }


// let useName=[22,"satya","teja",true];
// let sirName="mandal";
// console.log(Array.isArray(useName)); //true
// console.log(useName instanceof Array); //true
// console.log(useName.length); //4
// console.log(useName.indexOf("teja")); //2
// console.log(useName.includes(true));    //true
// console.log(useName.join("-")); //22-satya-teja-true
// useName.push("shreyansh");
// console.log(useName);   //[22, "satya", "teja", true, "shreyansh"]
// useName.pop();
// console.log(useName);   //[22, "satya", "teja", true]
// useName.shift();
// console.log(useName);   //["satya", "teja", true]
// useName.unshift("mr.");
// console.log(useName);   //["mr.", "satya", "teja", true]
// console.log(sirName[2]); //n
// console.log(sirName.charAt(2)); //n