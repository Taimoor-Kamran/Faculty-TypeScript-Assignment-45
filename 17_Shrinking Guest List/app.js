var Guest_list = ["Sir Zia Khan", "Sir Ameen Alam", "Sir Zeehsan Hanif"];
for (var i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ' It is our pleasure to invite you in our diner.\nThankYou!');
}
var Absent_List = "Sir Zeeshan Hanif";
var New_List = "Kamran Khan Tesori";
Guest_list[0] = New_List;
for (var i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ' It is our pleasure to invite you in our diner.\nThankYou!');
}
console.log("Mr. ".concat(Absent_List, " is Not Coming to Diner "));
console.log("Good News! we find big table so we are inviting 3 more guest");
Guest_list.unshift("Sir Zeeshan Hanif");
Guest_list.splice(0, 1, "Sir Amir Pinger");
Guest_list.push("Sir Daniyal Nagori");
for (var i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + ' It is our pleasure to invite you in our diner.\nThankYou!');
}
console.log("We can not Big Table , Only Two People will be invited");
while (Guest_list.length > 2) {
    var Remove_list = Guest_list.pop();
    console.log("Sorry Mr. ".concat(Remove_list, " You are not invited on dinner"));
}
for (var i = 0; i < Guest_list.length; i++) {
    console.log("Dear Mr. ".concat(Guest_list, " ' It is our pleasure to invite you in our diner.\nThankYou!"));
}
Guest_list.splice(0, 2);
console.log(Guest_list);
