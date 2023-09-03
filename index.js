const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.querySelector("#password-one")
let passwordTwo = document.querySelector("#password-two")

function generatePass() {
    let randomPass = ""
    for (let x = 0; x < 8; x++) {
        let pass = Math.floor(Math.random() * characters.length)
        randomPass += characters[pass]
    }
    return randomPass
}

function renderPass() {
    passwordOne.textContent = generatePass()
    passwordTwo.textContent = generatePass()
}
