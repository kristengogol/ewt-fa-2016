// ---------------------------------------
// Exersize 2: Complete this daysOfTheWeek array to include all 7 days
// hint: use splice, push, and unshift

var daysOfTheWeek = ['Tuesday', 'Wednesday', 'Friday', 'Saturday'];

daysOfTheWeek.splice(2, 0, 'Thursday');
daysOfTheWeek.unshift('Monday');
daysOfTheWeek.unshift('Sunday');

// do not touch or write past this line
$('body').append('<h1>' + daysOfTheWeek.join(', ') + '</h1>');
