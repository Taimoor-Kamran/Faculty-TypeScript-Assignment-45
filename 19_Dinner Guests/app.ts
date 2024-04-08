let Guest_List:string[] = ["Sir Zia Khan", "Sir Ameen Alam", "Sir Qasim"]

for(let i = 0; i < Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThankYou!')
}

let Absent_Person:string = "Sir Qasim"
let New_Person:string  = "Kamran Khan Tesori"

Guest_List[0] = New_Person;

for(let i = 0; i < Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThankYou!')
}

console.log("Mr. " + {Absent_Person} + " is not coming to dinner")

console.log("Good News! we find Big Table so We are Inviting 3 more Guest.")

Guest_List.unshift("Sir Zia Khan")
Guest_List.splice(0 , 2 ,"Daniyal Nagori")
Guest_List.pop()

for(let i = 0; i < Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThankYou!')
}

while(Guest_List.length > 2){
    let remove_person = Guest_List.pop()
    console.log("Sorry Mr." + remove_person + " You are removing this list") 
}

    // for (let i=0; i<Guest_List.length; i++) {

    //     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThankYou!\n\n')
    // }

    Guest_List.splice(0 , 2);

    console.log(Guest_List);

    console.log(`Total Number of Guest are: ${Guest_List.length}`);