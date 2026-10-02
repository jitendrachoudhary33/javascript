
console.log("hello class");
 let x=10 ;
y=30;
 console.log(x+y)

let a = 10 ;
let b = 20 ;
console.log(a+b)

a = marks(prompt("Enter a marks :"))
b = marks(prompt("Enter a marks :"))
console.log(a+b)

let onInsta = 4 ;
let onChrome = 7;
console.log("total screen time is",onInsta+onChrome,"hr.")

let totalTime = 8 ;
let alreadySpend = 3;
console.log("Time left ",totalTime - alreadySpend,".")

let a = 4;
let b = 5;

console.log(a*b)

let givenCaloriesPerServing = 70;
let marksOfServings = 5 ;
console.log(givenCaloriesPerServing*marksOfServings)

let x = 10 ;
let y = 3 ;
let z = x / y ;
console.log(z)

let x = 10 ;
let y = 3 ;
let z = x % y ;
console.log(z)

let x = 754;
let y = 10 ;
let z = x % y ;
console.log(z)

let x = 97 ;
let y = 4 ;
console.log(x%y)

let givenMinute = 130;
let  mins = givenMinute % 60 ;
let  hours = givenMinute / 60 ;
console.log("Hour:",Math.floor(hours))
console.log("Remaining minutes :",mins)


let principleAmount = 500 ;
let yearAfter = 2 ;
let accumulatedAmount = (principleAmount**yearAfter)
console.log(accumulatedAmount)


let maximumAtnums = 6 ;
console.log(`Login maximum atnums are : ${maximumAtnums}.`)

let defaultCharage = 1000 ;
let workCharge = 3000 ;
console.log(`Default charge for ship = ${defaultCharage} and workcharge = ${workCharge} Total charge is = ${defaultCharage+workCharge}. `)

score = 300 ;
bonusPoints = 50 ;
score = score += bonusPoints ;
console.log(`Score at the end of level = ${score}.`)

totalSteps = 5000 ;
dailyWalkSteps = 4500 ;
totalSteps += dailyWalkSteps
console.log(`The total wlaks on this day = ${totalSteps}.`)

let price = 500;
let chipsPrice = 50 ;
price -= chipsPrice
console.log(`The total price becomes ${price}.`)

let emiCount = 12 ;
let EmiCount = 1 ;
emiCount -= EmiCount
console.log(emiCount)
  

let totalData = 30;
let familyMembers = 5;
totalData /= familyMembers;
console.log(totalData)

let totalProfit = 40000;
let partners = 4;
eachPartnerProfit =  totalProfit /= partners
console.log(`Each person profit =${eachPartnerProfit}rs.`)

let shiftIndex = 10;
let shifts = 3 ;
shiftIndex %= shifts
console.log(shiftIndex)

let songmarks = 32;
let songsPlaylist = 10;
songPlay = songmarks %= songsPlaylist
console.log(songPlay)

console.log(7=="7")
console.log(7==70)
console.log(7==8)
console.log(7!=8)

console.log(7==false)
console.log(1==true)
console.log(8 == true)

let storedPin = 3434;
let enteredPin = "3434";
console.log(`Is pin correct ${storedPin==enteredPin}`)

let savedTheme = "dark";
let selectedTheme = "dark";
console.log(`Is theme match : ${savedTheme==selectedTheme}`)

let prompt = require("prompt-sync")();
let num = prompt("Enter a marks :")
let savedLanguageCode = "js";
let browserCurrentCode = "js";
issame = savedLanguageCode==browserCurrentCode
if (issame == true) {
    console.log(`Is both code are match : correct`)
}

let givenAge = 18;
let usersAge = "19";
console.log(`Is age is different : ${givenAge!=usersAge}`)


let conforbleLimitnum = 24 ;
let roomnum =39;
num = conforbleLimitnum < roomnum;
console.log(`Is required to turn on AC : ${num}`)


let requiredPercentage = 50 ;
let availablePercentage = 50.00000001;
allow = availablePercentage > requiredPercentage;
if (allow == true) {
    console.log("person eligible for exam .")

}
else {
    console.log("person not eligible for exam .")
}


let expectedTime = 3;
let deliveryTime = 2;
onTime = deliveryTime < expectedTime ;
if (onTime == true) {
    console.log(`Delivery under time`)
}
else {
    console.log(`Delivery is not on time`)
}

console.log(true && true)
console.log(true && false)l
console.log(false & false)


let emailVerified = true ;
let phonemarks = true ;
isBadgeVerified = emailVerified && phonemarks
console.log(isBadgeVerified)


let newUser = true;
let notPurchaseLast30Days = false;
isOfferApplied = newUser || notPurchaseLast30Days ;
console.log(`Offer applied - ${isOfferApplied}`)

let userAlreadyLogin = true ;
let signUp = !userAlreadyLogin ;
console.log(signUp)


let a = 30 ;
let b = a++ ;
console.log(a,b)

let c = 30 ;
let d = a++ ;
console.log(c,d)

let x = 200 ;
let y = --x ;
console.log(y,x)

let x = 800 ;
let y = x-- ;
console.log(y,x)

let totalLikes = 4000;
totalLikes++ ;
console.log(`Total likes ${totalLikes}`)

let countOnTimer = 20 ;
countOnTimer--;
console.log(`Second left ${countOnTimer}`)

let marks = 42
let studentName = "rahul"
if (marks >= 35) {
    console.log(studentName,"passed")
}
