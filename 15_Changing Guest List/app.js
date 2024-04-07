var Guest_list = ["Sir Zia", "Sir Ameen", "Sir Qaseem"];
for (var i = 0; i < Guest_list.length; i++) {
    console.log("Dear Mr ".concat(Guest_list[i], " It is our pleasure to invite you in our party.\nThankYou"));
}
var Absent_Guest = "Sir Qaseem";
var New_Guest = "Kamran Khan Tessori";
Guest_list[2] = New_Guest;
for (var i = 0; i < Guest_list.length; i++) {
    console.log("Dear Mr ".concat(Guest_list[i], " It is our pleasure to invite you in our party.\nThankYou"));
}
console.log(Absent_Guest);
