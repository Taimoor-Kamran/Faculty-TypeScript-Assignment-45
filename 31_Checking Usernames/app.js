var current_users = ["ali", "asad", "noman", "admin", "ahmed"];
var new_users = ["ghasiq", "farhan", "owais", "ahmed", "admin"];
var user_check = current_users.map(function (user) { return user.toLowerCase(); });
for (var i = 0; i < new_users.length; i++) {
    var lowerCase_new_user = new_users[i].toLowerCase();
    if (current_users.indexOf(lowerCase_new_user[i]) !== -1) {
        console.log("".concat(new_users[i], " that the person need to enter a username"));
    }
    else {
        console.log("".concat(new_users[i], " that the person will need to enter a username"));
    }
}
