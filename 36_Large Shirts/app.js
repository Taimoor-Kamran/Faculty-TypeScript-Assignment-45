function makeShirt(size, text) {
    if (size === void 0) { size = "large"; }
    if (text === void 0) { text = "I love Typescript"; }
    console.log("You Have a order a ".concat(size, " shirts that says ").concat(text));
}
makeShirt();
makeShirt("medium");
makeShirt("small", "i need a big shirt to wear");
