let personName:string ;

personName = prompt("Enter Your Name Please") || "";


let lowercase: string = personName.toLowerCase();
let uppercase: string = personName.toUpperCase();
let titlecase: string = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase()).join(' ')

if(personName !== null && personName !== ""){
    console.log(`Hello ${personName} Your Name is Here: lowerCase: ${lowercase} UpperCase: ${uppercase} TitleCase: ${titlecase} `)
}else{
    console.log("Please Enter your Name ?")
}