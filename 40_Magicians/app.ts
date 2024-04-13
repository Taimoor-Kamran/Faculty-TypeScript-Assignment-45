const data:string [] = ["Abdul Rehman", "Ahmed", "Yahya"]

function show_magician(data: string[]):void{
    for(let i = 0; i < data.length; i++){
        console.log(data[i].charAt(0).toUpperCase() + data[i].slice(1))
    }
}

show_magician(data)

