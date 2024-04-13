function city_country(city: string, country: string):string {
    return `${city} ${country}`
}

let first:string = city_country("pakistan", "karachi")
let second:string = city_country("USA", "Texas")
let third:string  = city_country("Sydney", "Australia")

console.log(first)
console.log(second)
console.log(third)