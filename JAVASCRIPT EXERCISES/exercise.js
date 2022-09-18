//Step 1.

console.log("Hello World");

//Step 2.

let MyName="Samuel";
let MyAge = 28;
let MyFavColor= "Blue";
const Dob= "September 01";

//Step 3.

console.log( MyName + " is " + MyAge + " years old," + "I'm born on " + Dob + ".And my favourite color is "  +  MyFavColor);

// Step 4.

let MyFriendName= "Daniel";
let MyFriendAge= 30;
let MyFriendFavColor= "Red";
const MyFriendDob= "December 14";

if (MyFriendAge > MyAge)
{
    console.log(MyFriendName + " is older than " + MyName);
}

MyAge +=1;
console.log( MyName + " is " + MyAge, " years old," + "I'm born on " + Dob + ".And my favourite color is "  +  MyFavColor);

let sum = (MyAge-1) + MyFriendAge;
console.log("Sum of " + MyName+ " and " + MyFriendName+"'s age is " + sum );

//step 5 - Data types and Arthimetic operations

let x = "5" + 2 + 3;
console.log(x);
x = 5 + 2 + "3";
console.log(x);
x= 5+"2"+3;
console.log(x);

let $ = "Hello World";
let $$$ = 2;
let $myMoney = 5;
sum = ($$$*$myMoney)%10;
console.log( sum );


let score = 100;
    score = "Welcome Home!" + 2453609124.0678;
    console.log(score);
    score = true;
    console.log(score + score + score*8/2+1-20);
    
// Comparison operators
    if (sum%2) and (MyFavColor!=Green)
    {
        console.log("I've have a reminder and my favourite color is " +MyFavColor);
    }

    if ((!sum%2) || (MyFavColor==Blue))
    {
        console.log("I don't have a reminder and my favourite color is " +MyFavColor);
    }

// Data Type of the variable

    let z=10, y=50;
    z **= y;
    console.log(z);
    let a;
    a= typeof(score)
    console.log(a);



