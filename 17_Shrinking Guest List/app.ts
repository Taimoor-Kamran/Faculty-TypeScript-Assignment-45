let Guest_list:string[] = ["Sir Zia Khan", "Sir Ameen Alam", "Sir Zeehsan Hanif"]

for(let i = 0; i < Guest_list.length; i++){
    console.log('Dear Mr. ' + Guest_list[i] + ' It is our pleasure to invite you in our diner.\nThankYou!');
}

let Absent_List:string = "Sir Zeeshan Hanif"
let New_List:string = "Kamran Khan Tesori"

Guest_list[0] = New_List;

for(let i = 0; i < Guest_list.length; i++){
    console.log('Dear Mr. ' + Guest_list[i] + ' It is our pleasure to invite you in our diner.\nThankYou!');
}

console.log(`Mr. ${Absent_List} is Not Coming to Diner `)

console.log("Good News! we find big table so we are inviting 3 more guest")

Guest_list.unshift("Sir Zeeshan Hanif")
Guest_list.splice(0, 1 , "Sir Amir Pinger")
Guest_list.push("Sir Daniyal Nagori")

for(let i = 0; i < Guest_list.length; i++){
    console.log('Dear Mr. ' + Guest_list[i] + ' It is our pleasure to invite you in our diner.\nThankYou!')
}

console.log("We can not Big Table , Only Two People will be invited")

while(Guest_list.length > 2) {
    let Remove_list:string | undefined = Guest_list.pop()
    console.log(`Sorry Mr. ${Remove_list} You are not invited on dinner`)
}

for(let i = 0; i < Guest_list.length; i++){
    console.log(`Dear Mr. ${Guest_list} ' It is our pleasure to invite you in our diner.\nThankYou!`)
}

Guest_list.splice(0, 2)
console.log(Guest_list)