// Exersize 5: create a variable named 'grade' with a numeric value of a grade.
// Have it pass through an if else statement that sets the letter grade to
//
// A for a grade that is 90 and above
// B for a grade that is 80 and above
// C for a grade that is 70 and above
// D for a grade that is 60 and above
// F for a grade for anything below a D
//
// replace the text in the html with the appropriate letter grade

//this was the code sample I found online but could not get to work
// if grade >= 90:  { student got an A }
// else if grade >= 80: { student got a B }
// else if grade >= 70: { student got a C }
// else if grade >= 60: { student got a D }
// else { student got an F }

var gradePrompt = prompt('Enter a numeric grade value');
var grade = parseInt(gradePrompt);
var letterGrade = '';

if (grade >= 90) {
  letterGrade = 'A';
} else if (grade >= 80) {
  letterGrade = 'B';
} else if (grade >= 70) {
  letterGrade = 'C';
} else if (grade >= 60) {
  letterGrade = 'D';
} else {
  letterGrade = 'F';
}

$('.grade').text(grade);
$('.letter-grade').text(letterGrade);
