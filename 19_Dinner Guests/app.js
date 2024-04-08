var Guest_List = ["Sir Zia Khan", "Sir Ameen Alam", "Sir Qasim"];
for (var i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThankYou!');
}
var Absent_Person = "Sir Qasim";
var New_Person = "Kamran Khan Tesori";
Guest_List[0] = New_Person;
for (var i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThankYou!');
}
console.log("Mr. " + { Absent_Person: Absent_Person } + " is not coming to dinner");
console.log("Good News! we find Big Table so We are Inviting 3 more Guest.");
Guest_List.unshift("Sir Zia Khan");
Guest_List.splice(0, 2, "Daniyal Nagori");
Guest_List.pop();
for (var i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThankYou!');
}
while (Guest_List.length > 2) {
    var remove_person = Guest_List.pop();
    console.log("Sorry Mr." + remove_person + " You are removing this list");
}
// for (let i=0; i<Guest_List.length; i++) {
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThankYou!\n\n')
// }
Guest_List.splice(0, 2);
console.log(Guest_List);
console.log("Total Number of Guest are: ".concat(Guest_List.length));
