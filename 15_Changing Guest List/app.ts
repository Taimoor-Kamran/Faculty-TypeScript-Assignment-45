let Guest_list:string[] = ["Sir Zia", "Sir Ameen", "Sir Qaseem"]

for(let i = 0; i < Guest_list.length; i++){
    console.log(`Dear Mr ${Guest_list[i]} It is our pleasure to invite you in our party.\nThankYou`)
}

let Absent_Guest:string = "Sir Qaseem"
let New_Guest:string = "Kamran Khan Tessori"

Guest_list[2] = New_Guest


for (let i = 0; i < Guest_list.length; i++){
    console.log(`Dear Mr ${Guest_list[i]} It is our pleasure to invite you in our party.\nThankYou`)
}

console.log(Absent_Guest)