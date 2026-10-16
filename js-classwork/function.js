// //||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\
// //-------------------------------------------  SYNTEX OF FUNCTION   -------------------------------------------------

// // function functionName(p1,p2,.....){
// //          (function declearation )
// //     return ......
// // };


// // //------------------------------------------------------------------------------------------------------------------

// function greet(name){
//     return `Welcome to coding gita , ${name}`
// };

// console.log(greet("jitesh"))

// // // // ///////////  OR  /////////////

// let greet = function(name){
//     return`Welcome to coding gita , ${name}`
// }
// console.log(greet("jitesh"))


// //------------------------------------------------------------------------------------------------------------------

// function line(){
//     return`// //------------------------------------------------------------------------------------------------------------------
// `
// }
// console.log(line())


// //////////      PARAMETER  AND  ARGUMENTS ///////////

// function greet(name){                      // name =>  prameter (are the variable which act as placeholder )
//     return `welcome to cg , ${name}`
// }
// console.log(greet("jitesh"))               // jitesh => argument(actual value of parameter)


// // //------------------------------------------------------------------------------------------------------------------


// function multiplication (num1,num2){
//     return `Multiplication is = ${num1 * num2}`
// }
// console.log(multiplication(3,4))


// // //------------------------------------------------------------------------------------------------------------------

// function fullname(first,last){
//     console.log(first + last)
// }
// fullname("jitesh", " choudhary")

// // //------------------------------------------------------------------------------------------------------------------

// function isEven(num){
//     if (num % 2 == 0){
//         console.log(`Is Even : True`)
//     }else {
//         console.log(`Is Even : False`)
//     }
// }
// isEven(3)

// // // // // ///////////  OR  /////////////

// function isEven(num){
//     return (num % 2 == 0)
// }
// console.log(isEven(3))

// //------------------------------------------------------------------------------------------------------------------

// function greet(){

// };
// console.log(greet())

// //------------------------------------------------------------------------------------------------------------------

// function studentSummery(name,m1,m2,m3){
//     return` name = ${name} , total = ${m1+m2+m3} , average = ${(m1+m2+m3)/3} `;
   
// }
// console.log(studentSummery("jitesh",24,24,24))


// //------------------------------------------------------------------------------------------------------------------

// function cube(n){
//     return`cube of this number = ${n**3}`
// }
// console.log(cube(4))

// //------------------------------------------------------------------------------------------------------------------

// function isPositive(num){
//     return(num>0);
// }
// console.log(isPositive(5))

// //------------------------------------------------------------------------------------------------------------------

// function sumOfThree(a,b,c){
//     return`Addition is = ${a+b+c}`

// }
// console.log(sumOfThree(10,20,30))

// //------------------------------------------------------------------------------------------------------------------


// function displayAge(){
//     let age = 20
//     console.log(age)
// }
// displayAge(age)
// console.log(displayAge)

// //------------------------------------------------------------------------------------------------------------------

// let course = "javascript";
// function value(){
//     console.log(course)
// }
// value()


// //||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\
// //-------------------------------------------  SYNTEX OF FUNCTION   -------------------------------------------------

// function studentMarks() {
//     var marks = 85;
//     console.log(marks);
// }

// studentMarks(); // 85
// // console.log(marks); // Error: marks is not defined

// //------------------------------------------------------------------------------------------------------------------

// let x = 10 ;
// function myFunc(){
//     console.log(x);
// }
// myFunc()
// console.log(x)

// //------------------------------------------------------------------------------------------------------------------

// function studentReport ( name, m1, m2, m3) {
//     let total = m1 + m2 + m3 ;
//     let average = (total)/3 ;
//     return "Student name : " + name + "   student marks : "+ total + "   average " + average  
// }
// console.log(studentReport("jitesh",90,90,90))

// //------------------------------------------------------------------------------------------------------------------

// function checkPass(avg){
//     return avg >= 40 ;

// }
// if (checkPass(3)){
//     console.log("Pass")
// }else{
//     console.log("Fail")
// }

// ////////////  or ///////////////


// function checkPass(avg){
//     if (avg >= 40 ){
//         return "Pass"
//     }else {
//         return "Fail"
//     }
// }
// console.log(checkPass(45))

// //////////////  or /////////////////////

// function checkPass(avg){
//     return avg >= 40 ? "Pass":"Fail";

// }
// console.log(checkPass(32))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                         //        NESTED FUNCTION            //

// function studentReport(name,m1,m2,m3){
//     function findTotal(m1,m2,m3){
//         return `Total marks = ${m1+m2+m3}`
//     }
//     function findAverage(m1, m2 ,m3 ){
//         return `Average = ${(m1+m2+m3)/3}`

//     }
//     let result1 = findTotal(10,10,10)
//     let result2 = findAverage(20,20,20)
//     return `Student name = ${name} Total marks = ${result1} Average = ${result2}`

// }
// console.log(studentReport("jitesh",20,20,20))

// //------------------------------------------------------------------------------------------------------------------

// function main(){

//     function helper(){
//         return "Helper function called"

//     }
//     return helper()
// }
// console.log(main())

// //------------------------------------------------------------------------------------------------------------------

// function calculateDimention (r){

//     function findArea (r){
//         let area = (22/7)*r*r
//         return area.toFixed(r)
//     }
    
//     function findParameter (r){
//         let parameter = 2*(22/7)*r
//         return parameter.toFixed(r)
//     }
//     let area = findArea(r)
//     let parameter = findParameter(r)
   
//     return `Area of circle = ${area} and parameter = ${parameter}`
// }
// console.log(calculateDimention(3))


