let users_name:string [] = ["Abdul Rehman", "Ahmed", "Yahya", "Taimoor", "admin"]

for(let i = 0; i < users_name.length; i++){
    if(users_name[i] === "admin"){
        console.log("Hello admin Would you like to see a report")
    }else{
        console.log(`Hello ${users_name[i]}, thank you for logging in again`)
    }
}