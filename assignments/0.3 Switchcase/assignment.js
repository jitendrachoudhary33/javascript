//-------------------------------------------------------------------------------------------------------------------------
// quetion = 1
let month = 3  ;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31 Days")
        break ;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 Days")
        break;
    case 2 :
        console.log("28 Days")
    default : 
        console.log("Invalid month !!")

}

//-------------------------------------------------------------------------------------------------------------------------

// question = 2
let ch = "a" ;
switch (ch){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Vowel")
        break;
    case "b":
    case "c":
    case "d":
    case "f":
    case "g":
    case "h":
    case "j":
    case "k":
    case "l":
    case "m":
    case "n":
    case "p":
    case "q":
    case "r":
    case "s":
    case "t":
    case "v":
    case "w":
    case "x":
    case "y":
    case "z":
        console.log("consonents")
        break ;
    default :
        console.log("Invalid case")
    
}

//-------------------------------------------------------------------------------------------------------------------------

// question = 3
let season = 2 ;
switch (season){
    case 1 :
    case 2 :
        console.log("Winter")
        break ;
    case 3:
    case 4 :
        console.log("Summer")
    default :
        console.log("Invalid case !!")
}

//-------------------------------------------------------------------------------------------------------------------------

// question = 4

let marks = 54 ;

switch(true){
    case marks >= 76 && marks <= 100 :
        console.log("Distinction")
        break;
    case marks >= 60 :
        console.log("1st class")
        break ;
    case marks >= 50 :
        console.log("2nd class")
        break ;
    case marks >= 35 :
        console.log("3rd class")
        break ;
    case marks < 35 :
        console.log("Fail!!")
        break ;
    default :
        console.log("Invalid marks !!")
    
}

//-------------------------------------------------------------------------------------------------------------------------

// question = 5

person = "user"    //  admin or user //
switch (person){
    case "admin" :
        let action = "create" ;    // "create" , "edit" , "delete" //
        switch (action){
            case "create" :
                console.log("create")
                break;
            case "edit" :
                console.log("edit")
                break ;
            case "delete" :
                console.log("delete")
                break ;
            default :
                console.log("Invalid case")
        }
        break ;
    case "user"  :
        console.log("Limited access")
        break ;
    default :
        console.log("Invalid case !!")

}

//-------------------------------------------------------------------------------------------------------------------------

// question = 6 

//         In this question we have to use break after print the one output , if wo don't use it after one case printed every case printed till the condition is break
let fruit = "mango";

switch (fruit) {
  case "apple":
    console.log("Apple is red")
    break ;
  case "mango":
    console.log("Mango is yellow")
    break;
  case "banana":
    console.log("Banana is yellow")
    break ;
  default:
    console.log("Unknown fruit")
}

//-------------------------------------------------------------------------------------------------------------------------

// question = 7 

let a =  false ;
switch (true){
    case a === String(a):
        console.log("String")
        break ;
    case a === Number(a) :
        console.log("Number")
        break ;
    case a === Boolean(a) : 
        console.log("Boolean")
        break ;
    case a === undefined :
        console.log("Undefined") 
        break ;
    case a === null :
        console.log("null") 
        break ;
    default :
        console.log("Not matched any value")
}

// some values do not match bcz switch case use strict equality //
 
//-------------------------------------------------------------------------------------------------------------------------

// question = 8 

let oprater = 4 ;
// 1 for "+" , 2 for "-" , 3 for "*" , 4 for "/" // , 5 for "%" , 6 for "**"

let num1 = 2 ;
let num2 = 2 ;
switch (oprater) {
    case 1 :
        console.log("Addition is ", num1 + num2)
        break ;
    case 2 :
        console.log("Substraction is ", num1 - num2)
        break ;
    case 3 :
        console.log("Multiplication  is ", num1 * num2)
        break ;
    case num1 / 0 || num2 / 0 :
        console.log("Not divisible ")
    case 4 :
        console.log("Division  is ", num1 / num2)
        break ;
    case 5 :
        console.log("Modulus  is ", num1 % num2)
        break ;
    case 6 :
        console.log("Exponentiation  is ", num1 ** num2)
        break ;
    default :
        console.log("Invalid oprator !!")
        
}

//-------------------------------------------------------------------------------------------------------------------------

// question = 9 

date = 15

switch (true){
    case date > 20 && date <= 31 :
        console.log(`“End of the month” `)
        break ;
    case date > 10 :
        console.log(`“Middle of the month” `)
        break ;
    case date >= 1 :
        console.log(`“Beginning of the month” `)
        break ;
    default :
        console.log("Invalid date !!")
    
}

//-------------------------------------------------------------------------------------------------------------------------

// question = 10

let foodCategory = "veg";
let foodItem = "pav";
let plateSize = "half"

switch (foodCategory) {
    case "veg":
        switch (foodItem) {
            case "pav":
                switch (plateSize) {
                    case "full":
                        foodPrice = 999;
                        break;
                    case "half":
                        foodPrice = 599;
                        break;
                }
                break;
            case "paneer":
                switch (plateSize) {
                    case "full":
                        foodPrice = 999;
                        break;
                    case "half":
                        foodPrice = 599;
                        break;
                };
                break;
            case "aloo":
                switch (plateSize) {
                    case "full":
                        foodPrice = 999;
                        break;
                    case "half":
                        foodPrice = 599;
                        break;
                };
                break;
        }
        break;
    case "nonveg":
        switch (foodItem) {
            case "item1":
                switch (plateSize) {
                    case "full":
                        foodPrice = 999;
                        break;
                    case "half":
                        foodPrice = 599;
                        break;
                }
                break;
            case "item2":
                switch (plateSize) {
                    case "full":
                        foodPrice = 999;
                        break;
                    case "half":
                        foodPrice = 599;
                        break;
                };
                break;
            case "item3":
                switch (plateSize) {
                    case "full":
                        foodPrice = 999;
                        break;
                    case "half":
                        foodPrice = 599;
                        break;
                };
                break;
        }
        break;
}

console.log(`Food Category: ${foodCategory}     Food Item: ${foodItem}     Food Plate: ${plateSize}     Food Price: ${foodPrice}`);


