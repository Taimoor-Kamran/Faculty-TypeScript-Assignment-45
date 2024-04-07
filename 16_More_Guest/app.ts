
let Guest_List :string[] = ["Sir Zia Khan" , "Sir Ameen Alam", "Sir Qasim"]

for(let i = 0; i < Guest_List.length; i++){
console.log('Dear Mr. ' + Guest_List[i] + 'It is our pleasure to invite you in our diner.\nThankYou!')
}

let Absent_Guest:string = "Sir Qasim"
let New_Guest:string  = "Kamran Khan Tessori"

Guest_List[2] = New_Guest

for(let i = 0; i < Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + 'It is our pleasure to invite you in our diner.\nThankYou!')
}

console.log(`${Absent_Guest} is not coming to the Diner.`)

console.log("Good News!  we find Big Table so We are Inviting 3 more Guest")

Guest_List.unshift("Sir Zeeshan Hanif")
Guest_List.splice(2, 0 , "Sir Amir Pinger")
Guest_List.push("Daniyal Nagori")

for(let i = 0; i < Guest_List.length; i++){
    console.log(`Dear Mr. ${Guest_List[i]} It is our pleasure to invite you in our diner.\nThankYou!`)
}
