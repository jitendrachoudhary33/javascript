
console.log("hello class");
 var x=10 ;
y=30;
 console.log(x+y)

var a = 10 ;
var b = 20 ;
console.log(a+b)

a = marks(prompt("Enter a marks :"))
b = marks(prompt("Enter a marks :"))
console.log(a+b)

var onInsta = 4 ;
var onChrome = 7;
console.log("total screen time is",onInsta+onChrome,"hr.")

var totalTime = 8 ;
var alreadySpend = 3;
console.log("Time left ",totalTime - alreadySpend,".")

var a = 4;
var b = 5;

console.log(a*b)

var givenCaloriesPerServing = 70;
var marksOfServings = 5 ;
console.log(givenCaloriesPerServing*marksOfServings)

var x = 10 ;
var y = 3 ;
var z = x / y ;
console.log(z)

var x = 10 ;
var y = 3 ;
var z = x % y ;
console.log(z)

var x = 754;
var y = 10 ;
var z = x % y ;
console.log(z)

var x = 97 ;
var y = 4 ;
console.log(x%y)

var givenMinute = 130;
var  mins = givenMinute % 60 ;
var  hours = givenMinute / 60 ;
console.log("Hour:",Math.floor(hours))
console.log("Remaining minutes :",mins)


var principleAmount = 500 ;
var yearAfter = 2 ;
var accumulatedAmount = (principleAmount**yearAfter)
console.log(accumulatedAmount)


var maximumAtnums = 6 ;
console.log(`Login maximum atnums are : ${maximumAtnums}.`)

var defaultCharage = 1000 ;
var workCharge = 3000 ;
console.log(`Default charge for ship = ${defaultCharage} and workcharge = ${workCharge} Total charge is = ${defaultCharage+workCharge}. `)

score = 300 ;
bonusPoints = 50 ;
score = score += bonusPoints ;
console.log(`Score at the end of level = ${score}.`)

totalSteps = 5000 ;
dailyWalkSteps = 4500 ;
totalSteps += dailyWalkSteps
console.log(`The total wlaks on this day = ${totalSteps}.`)

var price = 500;
var chipsPrice = 50 ;
price -= chipsPrice
console.log(`The total price becomes ${price}.`)

var emiCount = 12 ;
var EmiCount = 1 ;
emiCount -= EmiCount
console.log(emiCount)
  

var totalData = 30;
var familyMembers = 5;
totalData /= familyMembers;
console.log(totalData)

var totalProfit = 40000;
var partners = 4;
eachPartnerProfit =  totalProfit /= partners
console.log(`Each person profit =${eachPartnerProfit}rs.`)

var shiftIndex = 10;
var shifts = 3 ;
shiftIndex %= shifts
console.log(shiftIndex)

var songmarks = 32;
var songsPlaylist = 10;
songPlay = songmarks %= songsPlaylist
console.log(songPlay)

console.log(7=="7")
console.log(7==70)
console.log(7==8)
console.log(7!=8)

console.log(7==false)
console.log(1==true)
console.log(8 == true)

var storedPin = 3434;
var enteredPin = "3434";
console.log(`Is pin correct ${storedPin==enteredPin}`)

var savedTheme = "dark";
var selectedTheme = "dark";
console.log(`Is theme match : ${savedTheme==selectedTheme}`)

var prompt = require("prompt-sync")();
var num = prompt("Enter a marks :")
var savedLanguageCode = "js";
var browserCurrentCode = "js";
issame = savedLanguageCode==browserCurrentCode
if (issame == true) {
    console.log(`Is both code are match : correct`)
}

var givenAge = 18;
var usersAge = "19";
console.log(`Is age is different : ${givenAge!=usersAge}`)


var conforbleLimitnum = 24 ;
var roomnum =39;
num = conforbleLimitnum < roomnum;
console.log(`Is required to turn on AC : ${num}`)


var requiredPercentage = 50 ;
var availablePercentage = 50.00000001;
allow = availablePercentage > requiredPercentage;
if (allow == true) {
    console.log("person eligible for exam .")

}
else {
    console.log("person not eligible for exam .")
}


var expectedTime = 3;
var deliveryTime = 2;
onTime = deliveryTime < expectedTime ;
if (onTime == true) {
    console.log(`Delivery under time`)
}
else {
    console.log(`Delivery is not on time`)
}

console.log(true && true)
console.log(true && false)
console.log(false & false)


var emailVerified = true ;
var phonemarks = true ;
isBadgeVerified = emailVerified && phonemarks
console.log(isBadgeVerified)


var newUser = true;
var notPurchaseLast30Days = false;
isOfferApplied = newUser || notPurchaseLast30Days ;
console.log(`Offer applied - ${isOfferApplied}`)

var userAlreadyLogin = true ;
var signUp = !userAlreadyLogin ;
console.log(signUp)


var a1 = 30 ;
var b1 = a++ ;
console.log(a1,b1)

var c = 30 ;
var d = a++ ;
console.log(c,d)

var x2 = 200 ;
var y2 = --x ;
console.log(y2,x2)

var x1 = 800 ;
var y1 = x-- ;
console.log(y1,x1)

var totalLikes = 4000;
totalLikes++ ;
console.log(`Total likes ${totalLikes}`)

var countOnTimer = 20 ;
countOnTimer--;
console.log(`Second left ${countOnTimer}`)

var marks = 42
var studentName = "rahul"
if (marks >= 35) {
    console.log(studentName,"passed")
}
