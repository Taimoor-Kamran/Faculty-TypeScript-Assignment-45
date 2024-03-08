// Personal Message: Store a person’s name in a variable, and print a message to that person.
//  Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let person:string ;

person = prompt("Tell Me Your Name Please") || '';

if(person !== null && person !== ''){
    console.log("Hello " + person  + " Would you like to learn some Pyton today")
}else{
    console.log("Please Enter Your Name Here")
}
