// QUESTION 1

var num1 = 8;

if (num1 % 2 === 0) {
    console.log("Even");
}

// QUESTION 2

var temperature1 = 35;

if (temperature1 > 30) {
    console.log("It's Hot");
}

// QUESTION 3

var age_ = 20;

if (age_ >= 18) {
    console.log("Eligible to vote");
}

// QUESTION 4

var num2 = -5;

if (num2 >= 0) {
    console.log("Positive");
} else {
    console.log("Negative");
}

// QUESTION 5

var year1 = 2024;

if (year1 % 4 === 0) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}

// QUESTION 6

var ch1 = "a";

if (ch1 === "a" || ch1 === "e" || ch1 === "i" || ch1 === "o" || ch1 === "u") {
    console.log("Vowel");
} else {
    console.log("Consonant");
}

// QUESTION 7

var age1 = 25;

if (age1 < 12) {
    console.log("₹100");
} else if (age < 60) {
    console.log("₹200");
} else {
    console.log("₹150");
}

// QUESTION 8

var temperature = 22;

if (temperature < 15) {
    console.log("Cold");
} else if (temperature <= 25) {
    console.log("Pleasant");
} else {
    console.log("Hot");
}

// QUESTION 9

var a = 20;
var b = 35;
var c = 15;

if (a >= b && a >= c) {
    console.log(a);
} else if (b >= a && b >= c) {
    console.log(b);
} else {
    console.log(c);
}

// QUESTION 10

var num = 25;

if (num > 0) {
    if (num % 5 === 0) {
        console.log("Positive and divisible by 5");
    }
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// QUESTION 1

var marks = 95;

if (marks >= 35) {
    console.log("Pass");

    if (marks >= 90) {
        console.log("Excellent");
    }
} else {
    console.log("Fail");
}

// QUESTION 2

var isLoggedIn = true;
var isAdmin = true;

if (isLoggedIn) {
    if (isAdmin) {
        console.log("Admin Panel");
    }
}

// QUESTION 3

var num = -5;

if (num >= 0) {
    console.log("Positive");
} else {
    console.log("Negative");
}

// QUESTION 4

var marks = 45;

if (marks >= 35) {
    console.log("Passed");
} else {
    console.log("Failed");
}

// QUESTION 5

var marks = 45;

if (marks >= 35) {
    console.log("Passed");
} else {
    console.log("Failed");
}

// QUESTION 6

var ch = "A";

if (ch >= "A" && ch <= "Z") {
    console.log("Uppercase varter");
} else {
    console.log("Not an Uppercase varter");
}

// QUESTION 7

var num = 12;
if (num % 3 === 0) {
    console.log("Divisible by 3");
} else {
    console.log("Not Divisible by 3");
}

// QUESTION 8

var year = 2024;
if (year % 4 === 0) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}

// QUESTION 9

var year = 2024;
if (year % 4 === 0) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}

// QUESTION 10

var num = 0;
if (num >= 0) {
    if (num === 0) {
        console.log("Zero");
    } else {
        console.log("Positive");
    }
} else {
    console.log("Negative");
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// QUESTION 1

var month = 4;
if (month === 12 || month === 1 || month === 2) {
    console.log("Winter");
} else if (month === 3 || month === 4 || month === 5) {
    console.log("Summer");
} else if (month === 6 || month === 7 || month === 8) {
    console.log("Monsoon");
} else if (month === 9 || month === 10 || month === 11) {
    console.log("Autumn");
} else {
    console.log("Invalid Month");
}

// QUESTION 2

var income = 800000;
var tax;

if (income < 300000) {
    tax = 0;
} else if (income <= 700000) {
    tax = income * 0.05;
} else if (income <= 1000000) {
    tax = income * 0.10;
} else {
    tax = income * 0.15;
}

console.log("Tax =", tax);

// QUESTION 3

var score = 85;
if (score >= 90) {
    console.log("Outstanding");
} else if (score >= 70) {
    console.log("Good");
} else if (score >= 40) {
    console.log("Average");
} else {
    console.log("Needs Improvement");
}
 
// QUESTION 4

var score = 85;

if (score >= 90) {
    console.log("Outstanding");
} else if (score >= 70) {
    console.log("Good");
} else if (score >= 40) {
    console.log("Average");
} else {
    console.log("Needs Improvement");
}

// QUESTION 5

var height = 175;

if (height < 150) {
    console.log("Short");
} else if (height <= 170) {
    console.log("Average");
} else {
    console.log("Tall");
}

// QUESTION 6

var day = 6;

if (day >= 1 && day <= 5) {
    console.log("Weekday");
} else if (day === 6 || day === 7) {
    console.log("Weekend");
} else {
    console.log("Invalid Day");
}

// QUESTION 7

var day = 6;

if (day >= 1 && day <= 5) {
    console.log("Weekday");
} else if (day === 6 || day === 7) {
    console.log("Weekend");
} else {
    console.log("Invalid Day");
}

// QUESTION 8

var attendance = 82;

if (attendance >= 90) {
    console.log("Excellent");
} else if (attendance >= 75) {
    console.log("Good");
} else if (attendance >= 50) {
    console.log("Satisfactory");
} else {
    console.log("Poor");
}

// QUESTION 9

var a = 75;
var b = 90;
var c = 80;

if (a >= b && a >= c) {
    console.log("Highest =", a);
} else if (b >= a && b >= c) {
    console.log("Highest =", b);
} else {
    console.log("Highest =", c);
}

// QUESTION 10

var a = 75;
var b = 90;
var c = 80;

if (a >= b && a >= c) {
    console.log("Highest =", a);
} else if (b >= a && b >= c) {
    console.log("Highest =", b);
} else {
    console.log("Highest =", c);
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// QUESTION 1

var num = 15;

if (num > 10) {
    if (num % 3 === 0) {
        console.log("Greater than 10 and Divisible by 3");
    } else {
        console.log("Greater than 10 but Not Divisible by 3");
    }
}

// QUESTION 2

var num = 15;

if (num > 10) {
    if (num % 3 === 0) {
        console.log("Greater than 10 and Divisible by 3");
    } else {
        console.log("Greater than 10 but Not Divisible by 3");
    }
}

// QUESTION 3

var age = 20;
var hasVoterID = true;

if (age >= 18) {
    if (hasVoterID) {
        console.log("Can Vote");
    }
}

// QUESTION 4

var enteredPin = 1234;
var correctPin = 1234;

var balance = 5000;
var withdrawal = 3000;

if (enteredPin === correctPin) {
    if (balance >= withdrawal) {
        balance = balance - withdrawal;
        console.log("Withdrawal Successful");
        console.log("Remaining Balance =", balance);
    } else {
        console.log("Insufficient Balance");
    }
} else {
    console.log("Incorrect PIN");
}

// QUESTION 5

var enteredPin = 1234;
var correctPin = 1234;

var balance = 5000;
var withdrawal = 3000;

if (enteredPin === correctPin) {
    if (balance >= withdrawal) {
        balance = balance - withdrawal;
        console.log("Withdrawal Successful");
        console.log("Remaining Balance =", balance);
    } else {
        console.log("Insufficient Balance");
    }
} else {
    console.log("Incorrect PIN");
}

// QUESTION 6

var email = "student@gmail.com";

if (email.includes("@")) {

    if (email.endsWith(".com")) {

        if (email.length > 10) {
            console.log("Valid Email");
        }

    }
}

// QUESTION 7

var cartTotal = 2000;
var premiumMember = true;
var finalAmount;

if (cartTotal >= 1000) {

    if (premiumMember) {
        finalAmount = cartTotal - (cartTotal * 0.20);
    } else {
        finalAmount = cartTotal - (cartTotal * 0.10);
    }

} else {
    finalAmount = cartTotal;
}

console.log("Final Amount =", finalAmount);

// QUESTION 8

var num = 20;

if (num > 0) {

    if (num % 2 === 0) {

        if (num % 4 === 0) {
            console.log("Positive Even and Divisible by 4");
        }

    }

}

// QUESTION 9

var num = 20;

if (num > 0) {

    if (num % 2 === 0) {

        if (num % 4 === 0) {
            console.log("Positive Even and Divisible by 4");
        }

    }

}

// QUESTION 10

var isPresent = true;
var internalMarks = 35;
var externalMarks = 40;

if (isPresent) {

    if (internalMarks >= 30) {

        if (externalMarks >= 35) {
            console.log("Eligible for Final Exam");
        }

    }

}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------