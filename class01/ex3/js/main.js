// ---------------------------------------
// Exersize 3: Create an object with your firstName and lastName
// append them to the html using jQuery
//
// syntax for an object:
// var obj = {};

// started out using var person per online notes
// but when checked against solutions,
// I realized the instructions specifically mention the use of var obj = {};

var obj = {firstName: "Kristen", lastName: "Gogol",};

$('.first-name').append(obj.firstName);
$('.last-name').append(obj.lastName);
