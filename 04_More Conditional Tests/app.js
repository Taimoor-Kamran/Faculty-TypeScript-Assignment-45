var Name = "Muhammad";
var Name_1 = "Muhammad Taimoor ";
var Name_2 = "Muhammad Taimoor Kamran";
// 1. Condition
if (Name == Name_1) {
    console.log("name are equal");
}
else {
    console.log("name are not equal");
} // This Condition is return False
// 2. Condition
if (Name == Name_2) {
    console.log("Name are Equal");
}
else {
    console.log("Name are not equal");
} // This Condition is return False
// 3. Condition
if (Name !== Name_2) {
    console.log("Name are Equal");
}
else {
    console.log("This Condition are not equal");
} // This Condition are retrurn True
// 4. Condition
var person1_age = 17;
var person2_age = 38;
if (person1_age == 17) {
    console.log("Your are Eligible for Vote");
}
else {
    console.log("You are Eligebal But Old Categery Vote");
} // This Condition is return True
// 5. Condition
if (person1_age <= person2_age) {
    console.log("You are Under 18");
}
else {
    console.log("You are young");
} // This Condition is return True
// 6. Condition
if (person1_age >= person2_age) {
    console.log("You are Under 18");
}
else {
    console.log("You are Young");
}
// 7. Condition
if (person1_age !== person2_age) {
    console.log("Condtion 1 and 2 is Same");
}
else {
    console.log("Condition 1 and 2 is Not Same");
}
// 8. Condition
if (person1_age == 17 && person2_age == 38) {
    console.log("Person is Eligible for Vote");
}
else {
    console.log("Person is not Eligible for Vote");
}
// 9. Condition
var Cities = ["Texas", "New Jersey", "North Carolina", "Phoenix", "Chicago"];
if (Cities.indexOf("Texas") !== -1) {
    console.log(Cities[0] + " is in This List");
}
else {
    console.log("is not there in this");
}
// 10. Condition
if (Cities.indexOf("Texas")) {
    console.log(Cities[0] + " is in This List");
}
else {
    console.log("is not there in this list");
}
