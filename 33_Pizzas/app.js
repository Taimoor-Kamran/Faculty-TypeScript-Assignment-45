var fourite_pizza = ["Pepperoni", "Supreme", "Hawaiian"];
for (var i = 0; i < fourite_pizza.length; i++) {
    console.log(fourite_pizza[i]);
    console.log("I Like perpperoni pizza");
    break;
}
for (var j = 0; j < fourite_pizza.length; j++) {
    if (fourite_pizza[j] === "Pepperoni") {
        console.log("How Much You Like to Pizza");
    }
    else {
        console.log("Such as I really Love " + "Pepperoni" + " Pizza");
        break;
    }
}
