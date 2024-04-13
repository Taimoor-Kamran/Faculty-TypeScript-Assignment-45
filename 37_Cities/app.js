// function describe_ciites(city: string , country: string = "United States America"){
//     console.log(`${city} is in ${country}`)
// }
// describe_ciites("Texas")
// describe_ciites("Sydney", "Australia")
// describe_ciites("Hackney", "is in London")
function describe_city(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city('karachi');
describe_city('france', 'europe');
describe_city('lahore', 'is in punjab');
