var users = ["Abdul Rehman", "Ahmed", "Yahya", "Taimoor", "admin"];
if (users.length === 0) {
    console.log("We need to find some users");
}
else {
    for (var i = 0; i < users.length; i++) {
        if (users[i] === "admin") {
            console.log("Hello admin would you like to see a status report");
        }
        else {
            console.log("Hello  " + users[i] + " Thank you for logging again");
        }
    }
}
users = [];
if (users.length === 0) {
    console.log("we need to find some users!");
}
