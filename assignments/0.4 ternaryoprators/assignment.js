//----------------------------        
//                            SYNTEX 
//                                -------------------------------------------------------------------------------------------
// console.log(condition ? "massage"-- if condition true : "massage"--if condition false)

//-------------------------------------------------------------------------------------------------------------------------

// question = 1 
 
var num = 14 ;
result = ( num % 7 == 0 ? "Divisible by 7" : "Not divisible by 7 ")
console.log(result)

//-------------------------------------------------------------------------------------------------------------------------

// question = 2 

var temprature = 30 ;
result = ( temprature >= 30 ? "Hot Day" : "Pleasant Day")
console.log(result)

//-------------------------------------------------------------------------------------------------------------------------

// question = 3

var a = "" ;
result = ( a == "" ?  "Empty String" : "String has content")
console.log(result)

//-------------------------------------------------------------------------------------------------------------------------

// question = 4 

var age = -3 ;
result = (age < 0 ? "Invalid Age" : age <= 19 && age > 13 ?  "Teenager" : age <= 13 ? "Child" :   "Adult")
console.log(result)

//-------------------------------------------------------------------------------------------------------------------------
 
// question = 5 

var a1 = 5 ;
var b1 = 5 ;
var c1 = 5 ;
result = (a1 > b1  && a1 > c1 ? `${a1} is largest ` : b1 > c1 && b1 > a1 ? `${b1} is largest` : c1 > a1 && c1 > b1 ? `${c1} is largest ` : `All are ${a1} ` )
console.log(result)


//-------------------------------------------------------------------------------------------------------------------------

// question = 7 

var num = -3 ;
result = (num > 0 && num % 2 == 0 ? `Positive Even ` : num > 0 && num % 2 == 1 ? `Positive Odd ` : num < 0 && num % 2 == 0 ? `Negetive Even` : num < 0 && num % 2 == 1 ? `Negetive Odd` : num == 0 ? `Zero` : `Invalid Number`)
console.log(result)

//-------------------------------------------------------------------------------------------------------------------------

// question = 8 

var year = 2000 ;
result = (year % 4 == 0 && year % 400 == 0 || year % 100 != 0 ? "Leap year" : "not a leap year ")
console.log(result)

//-------------------------------------------------------------------------------------------------------------------------

// question = 9 

var role = "user" ;
var action = "htrhtr" ;
result = (role === "admin" ? action === "devared" ? "Admin devared" : action === "edit" ? "Admin Edit " : "Admin other" : role === "user" ? action === "view" ? "User View" : "User Restricted" : "Invalid Role " )
console.log(result)

//-------------------------------------------------------------------------------------------------------------------------

// question = 10 
var total = 4000 ;
result = (total >= 5000 ? `20% discount : Final amount = ${total - total * 0.2}` : total >= 2000 ? `10% discount : Final amount = ${total - total * 0.1}` : total >= 1000 ? `5% discount : Final amount = ${total - total * 0.05}` : `0% discount : Final amount = ${total}`)
console.log(result)

//-------------------------------------------------------------------------------------------------------------------------






























