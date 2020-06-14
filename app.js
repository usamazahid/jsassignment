//Chapter 1 
//Task 1

// alert("Welcome to SMIT");

//Task 2

// alert("Error! Please enter a valid password.");

//Task 3

// alert("Welcome to JS Land....\n Happy Coding!");

//Task 4

// alert("Welcome to JS Land");

// alert("Happy Coding!");

//Task 5

 //alert("Hello... I can run JS through my web browser's console");

//Task 6

//in index.html

//Task 7

//in index.html

//Chapter 2
//Task 1

// var username = "usama";

// //Task 2

// var myName = "Usama Zahid";

// //Task 3

// var message = "Hello World";

// alert(message);

// //Task 4

// var name = "Usama Zahid";
// var age = "15 years old";
// var course = "Certified Mobile Application Development";
// alert(name);
// alert(age);
// alert(course);

// //Task 5

// var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(pizza);

// //Task 6

// var email = "usamazahid100@gmail.com";
// alert("Your Email: " + email);

// //Task 7

// var book =  "A smarter way to learn JavaScript";
// alert("I am trying to lear from the Book" + book);

// //Task 8

// document.getElementById('demo').innerHTML = "Yah! I can write";

// //Task 9

// alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");

//Chapter 3
//Task 1

// var age = "I am 15 years old";
// alert(age);

//Task 2

// if(localStorage.getItem("visits") == null){
// localStorage.setItem("visits", 1);
// alert("You Visited: " + 1 + " Times");
// }else{
// var visits = parseInt(localStorage.getItem("visits")) + 1;
// localStorage.setItem("visits", visits);
// alert("You Visited: " + visits + " Times");
// }

//Task 3

// var birthYear = "1990";
// document.getElementById("demo").innerHTML = "My birth year is " + birthYear + "<br/> Data type of my declare variable is " + typeof(birthYear);

//Task 4
// var CustomerName = prompt("Your Name?");
// var ProductName = prompt("Product Name?");
// var Quantity = prompt("Quantity?");
// document.getElementById("demo").innerHTML = CustomerName + " Orderd " + Quantity + " " + ProductName + " on XYZ Cloting store";

//Chapter 4
//Task 1

// var a, b, c;

//Task 2

// var 1, #, -;

//Task 3

// var data = "<h1>Rules for naming JS variables</h1> <br />";
// data += "Variable names can only contain number, $ and _. For example: $any_1stVariable <br />";
// data += "Variable must begin with a letter, $ or _. For example : $name, _name or name <br />";
// data += "Variable names are case sensitive <br />";
// data += "Variable names should not be JS keyword";
// document.getElementById("demo").innerHTML = data;

//Chapter 5
//Task 1
// document.getElementById("demo").innerHTML = 1 + 1;
//Task 2
// document.getElementById("demo").innerHTML = 1 - 1;
// document.getElementById("demo").innerHTML = 1 * 1;
// document.getElementById("demo").innerHTML = 1 / 1;
//Task 3
// var number;
// document.getElementById("demo").innerHTML = "Value after variable declaration is:" + number + "<br/>";

// number = 5  ;
// document.getElementById("demo").innerHTML += "Initial value:  " + number + "<br/>";

// number = number++;
// document.getElementById("demo").innerHTML += "Value after increment is: " + number + "<br/>";

// number += 7;
// document.getElementById("demo").innerHTML += "Value after addition is :" + number + "<br/>";

// number = number--;
// document.getElementById("demo").innerHTML += "Value after decrement is: " + number + "<br/>";

// number = number%3 ;
// document.getElementById("demo").innerHTML += "The remainder is: " + number + "<br/>";

//Task 4
// var ticketCost = 600;
// var requiredTicket = parseInt(prompt("How Many Tickets?"));
// document.getElementById("demo").innerHTML ="Total Cost to buy " + requiredTicket + " is " + ticketCost * requiredTicket + "PKR";

//Task 5

// var table =  parseInt(prompt("Table Number?"));

// for(var i = 1; i<= 10; i++)
// document.getElementById("demo").innerHTML += table + " X " + i + " = " + table * i + "<br>";


//Task 6
// var temp =  parseInt(prompt("Temprature Celcius?"));
// document.getElementById("demo").innerHTML = temp + "<sup>0</sup>C is " + (temp - 32) * 5/9 + "<sup>0</sup>F <br>";

// var temp =  parseInt(prompt("Temprature Farenheit?"));
// document.getElementById("demo").innerHTML += temp + "<sup>0</sup>F is " + (temp * 9/5) + 32 + "<sup>0</sup>C";

//Task 7
// var price1 = 650;
// var quantity1 = 3;
// var price2 = 100;
// var quantity2 = 7;
// var shipping = 100;

// document.getElementById("demo").innerHTML = "Total Cost of your order is " + price1 * quantity1 + price2 * quantity2 + shipping;

//Task 8

// var english = 80;
// var math = 99;

// document.getElementById("demo").innerHTML =  "Total Marks 200 <br>";
// var total = english + math;
// document.getElementById("demo").innerHTML +=  "Marks Obtained " + total + " <br>";
// var percentage = (english + math)/200*100;
// document.getElementById("demo").innerHTML +=  "Percentage " + percentage + " <br>";

//Task 9

// document.getElementById("demo").innerHTML = "Total Currency in PKR: " + 10 * 150.48;

// //Task 10

// var calc = 2 +5 *10 /2;
// document.getElementById("demo").innerHTML = calc;

//Task 11

// var currentYear = 2020;
// var birthYear = 1994;
// document.getElementById("demo").innerHTML =  currentYear - birthYear;


//Task 12

// var radius = 20;
// var circumference = 2 *  Math.PI * radius;
// var area =  Math.PI * radius * radius;

// document.getElementById("demo").innerHTML = radius + " " + circumference + " " + area;

//Task 13

// var snack = "kit kat";
// var currentage = 25;
// var maxage = 900;
// var snacksperday = 3
// document.getElementById("demo").innerHTML =  maxage - currentage * snacksperday;


//Chapter 6-9
//Task 1

// var number = 10;
// number = ++number;
//  document.getElementById("demo").innerHTML = number;

//  number = number++;
//  document.getElementById("demo").innerHTML += number;

//  number = --number;
//  document.getElementById("demo").innerHTML += number;

//  number = number--;
//  document.getElementById("demo").innerHTML += number;

// //Task 2
//  var a = 2, b = 1;
//  // --a will be 1,
//  // --a - --b will be 0,
//  // --a - --b + ++b will be 1,
//  // --a - --b + ++b + b-- will be 1;

//  // console.log(--a);
//  // console.log(--a - --b);
//  // console.log(--a - --b + ++b);
//  console.log(--a - --b + ++b + b--);
// //Task 3
// var name = prompt("Your Name");
// alert("welcome " + name);
// //Task 4
// //Task 5

// var table =  prompt("Table Number?");
// console.log(table);
// if(table == "")
// 	table = 5;

// for(var i = 1; i<= 10; i++)
// document.getElementById("demo").innerHTML += table + " X " + i + " = " + table * i + "<br>";



//Task 6
// var english = parseInt(prompt("english marsk?"));
// var math = parseInt(prompt("math marsk?"));
// var science = parseInt(prompt("science marsk?"));

// document.getElementById("demo").innerHTML = (english + math + science) /300 * 100;

//Chapter 9-11
//Task 1
// var city = prompt("Your City?");
// if(city == "Karachi")
// 	alert("Welcome to Karachi");
// //Task 2
// var gender = prompt("Your Gender?");
// if(gender == Male){
// 	alert("Sir");
// }else{
// 	alert("Ma'am");
// }

//Task 3
// var color = prompt("Trafic Light Color?");
// if(color == "Red"){
// 	alert("Must Stop");
// }else if(color == "Yellow"){
// 	alert("Ready to move");
// }else if(color == "Green"){
// 	alert("Move now");
// }
// //Task 4
// var remainingfuel = parseInt(prompt("Remaining Fuel?"));
// if(remainingfuel < 0.25){
// 	alert("Please refill the fuel in your car");
// }
//Task 5
// a yes
// b no
// c condition 3
// d  no
// e true
// f yes
//Task 6
// var english = 80;
// var math = 99;

// document.getElementById("demo").innerHTML =  "Total Marks 200 <br>";
// var total = english + math;
// document.getElementById("demo").innerHTML +=  "Marks Obtained " + total + " <br>";
// var percentage = (english + math)/200*100;
// document.getElementById("demo").innerHTML +=  "Percentage " + percentage + " <br>";
// if(percentag >= 90){
// document.getElementById("demo").innerHTML +=  "A Grade";	
// }

//Task 7
// var guess = 9;
// var number = parseInt(prompt("Guess the Number"));
// if(number + 1 == guess){
// 	alert("Close enough");
// }

//Task 8
// var number = parseInt(prompt("Enter the Number"));
// if (number % 3 == 0){
// 	alert("divisible");
// }
//Task 9
// var number = parseInt(prompt("Enter the Number"));
// if (number % 2 == 0){
// 	alert("Even");
// }
//Task 10
// var number = parseInt(prompt("Enter the Number"));
// if(number > 40)
// 	alert("its too hot outside");
// else if(number > 30)
// 	alert("The weather today is normal");
// //Task 11
// var number1 = parseInt(prompt("Enter First Number"));
// var number2 = parseInt(prompt("Enter Second Number"));
// var operator = (prompt("Enter the Operator"));
// if(operator == +){
// 	alert(number1 + number2);
// }
//Chapter 14-16
//Task 1
// var student = ["ali", "usama",1 , true];
// console.log(student);
//Task 2
//Task 3
//Task 4
//Task 5
//Task 6
//Task 7
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "BCOM", "MS", "M. Phil", "PhD"];
// for(var i = 0; i< qualifications.length; i++){
// 	document.getElementById("demo").innerHTML += qualifications[i] + "<br>";
// }
//Task 8 
//Task 9
//Task 10
//Task 11
//Task 12
//Task 13
//Task 14
//Task 15

// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// var dropdown = "<select>";
// for(var i = 0; i< manufacturers.length; i++){
// dropdown += "<option value="+i+">"+manufacturers[i]+"</option>";
// }
// dropdown += "</select>";
// document.write(dropdown);

//Chapter 17-20
//Task 1
//Task 2
// var array = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
// document.write(array[0][3]);
//Task 3
//Task 4
//Task 5
//Task 6
//Task 7
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var input = prompt("Enter Name");
// document.write(A.indexOf(input));
//Task 8
// var A = [24, 53, 78, 91, 12];
// var max = 0;
// for(var i = 0; i< A.length; i++){
// if(max < A[i]){
// max = A[i];
// }
// }
// document.write(max);
//Task 9
// var A = [24, 53, 78, 91, 12];
// var min = A[0];
// for(var i = 0; i< A.length; i++){
// if(min > A[i]){
// min = A[i];
// }
// }
// document.write(min);
//Task 10