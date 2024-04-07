var Guest_List = ["Sir Zia Khan", "Sir Ameen Alam", "Sir Qasim"];
for (var i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + 'It is our pleasure to invite you in our diner.\nThankYou!');
}
var Absent_Guest = "Sir Qasim";
var New_Guest = "Kamran Khan Tessori";
Guest_List[2] = New_Guest;
for (var i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + 'It is our pleasure to invite you in our diner.\nThankYou!');
}
console.log("".concat(Absent_Guest, " is not coming to the Diner."));
console.log("Good News!  we find Big Table so We are Inviting 3 more Guest");
Guest_List.unshift("Sir Zeeshan Hanif");
Guest_List.splice(2, 0, "Sir Amir Pinger");
Guest_List.push("Daniyal Nagori");
for (var i = 0; i < Guest_List.length; i++) {
    console.log("Dear Mr. ".concat(Guest_List[i], " It is our pleasure to invite you in our diner.\nThankYou!"));
}
