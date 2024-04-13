function show_magician(data) {
    for (var i = 0; i < data.length; i++) {
        console.log(data[i].charAt(0).toUpperCase() + data[i].slice(1));
    }
}
var data = ["Abdul Rehman", "Ahmed", "Yahya"];
show_magician(data);
