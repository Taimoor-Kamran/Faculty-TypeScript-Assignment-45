var users_name = ["Abdul Rehman", "Ahmed", "Yahya", "Taimoor", "admin"];
for (var i = 0; i < users_name.length; i++) {
    if (users_name[i] === "admin") {
        console.log("Hello admin Would you like to see a report");
    }
    else {
        console.log("Hello ".concat(users_name[i], ", thank you for logging in again"));
    }
}
