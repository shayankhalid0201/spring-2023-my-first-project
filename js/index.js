// TASK 1
let a = 3;
let b = 5;
let c;

// alert;
let output = `
    let a = 3;\n
    let b = 5;\n
    let c;
    -------------
    a + b = ${a + b}
    a - b = ${a - b}
    a * b = ${a * b}
    a / b = ${a / b}
    a % b = ${a % b}
    a += b = ${a += b}
    a -= b = ${a -= b}
    a *= b = ${a *= b}
    a /= b = ${a /= b}
    a %= b = ${a %= b}
    a == b = ${a == b}
    a != b = ${a != b}
    a > b = ${a > b}
    a < b = ${a < b}
    !a && !c = ${!a && !c}
    !a || !c = ${!a || !c}
    `;
alert(output);


// TASK 2

let first_name = "Syed Shayan";
let last_name = "Khalid";
let email_id = "khal0201@algonquinlive.com";
	
    output = " My name is " + first_name + " " + last_name + " you can contact me at " + email_id + " .";

    console.log(output);

    `My name is ${first_name} ${last_name} you can contact me at ${email_id}.`;
    console.log(output);
    alert(output);