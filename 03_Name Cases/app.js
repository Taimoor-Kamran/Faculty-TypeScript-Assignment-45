var personName;
personName = prompt("Enter Your Name Please") || "";
var lowercase = personName.toLowerCase();
var uppercase = personName.toUpperCase();
var titlecase = personName.split(' ').map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase(); }).join(' ');
if (personName !== null && personName !== "") {
    console.log("Hello ".concat(personName, " Your Name is Here: lowerCase: ").concat(lowercase, " UpperCase: ").concat(uppercase, " TitleCase: ").concat(titlecase, " "));
}
else {
    console.log("Please Enter your Name ?");
}
