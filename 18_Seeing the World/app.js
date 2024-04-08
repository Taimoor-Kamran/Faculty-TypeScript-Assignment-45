var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Place = ["sydney", "rome", "los angles", "statue of liberty", "paramid of giza"];
console.log("Orignal " + Place);
console.log("Copy " + __spreadArray([], Place, true).sort());
console.log("Orignal" + Place);
console.log("Copy " + __spreadArray([], Place, true).sort().reverse());
console.log("Orignal" + Place);
console.log("Orignal" + Place.reverse());
console.log("Orignal" + Place.reverse());
console.log("Orignal" + Place.sort());
console.log("Orignal " + Place.sort().reverse());
