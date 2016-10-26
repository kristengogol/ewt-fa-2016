// ---------------------------------------
// Exersize 4: Create an array with a list of your skillsets
// Loop through them and append each one to
// append them to the <ul class="skillsets"> as <li> elements

// based on notes I found the following code online at w3schools.com for loop
// I had a harder time with this one

//var skillsets, text, flen, i;

// skillsets = ["collaboration", "html", "continuity", "editor"];
// fLen = skillsets.length;
// text = "<ul>";
// for (i=0; i<fLen; i++) {
//   text+="<li>" + skillsets[i] + "<li>";
// }

var skillsets = ["collaboration", "html", "css", "continuity", "editor"];

skillsets.forEach(function (skillset, index) {
  $('.skillsets').append('<li>' + skillset + '</li>');
});
