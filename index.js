let passOneEl = document.getElementById("pass-one")
let passTwoEl = document.getElementById("pass-two")
let passThreeEl = document.getElementById("pass-three")
let passFourEl = document.getElementById("pass-four")
let allPossible = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
                    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
                    "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "+", "{", "[", "}", "]", "|", ":", ";", "'", "<", ",", ".", ">", "/", "?",
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let pass1 = ""
let pass2 = ""
let pass3 = ""
let pass4 = ""

let isPassGenerated = false

function generatePass(){
    if(isPassGenerated === false){
        for(i = 1; i < 15; i++){
            let randomNum = Math.floor(Math.random() * 92) 
            pass1 += allPossible[randomNum]
        }
        passOneEl.textContent = pass1

        for(i = 1; i < 15; i++){
            let randomNum = Math.floor(Math.random() * 92) 
            pass2 += allPossible[randomNum]
        }
        passTwoEl.textContent = pass2

        for(i = 1; i < 15; i++){
            let randomNum = Math.floor(Math.random() * 92) 
            pass3 += allPossible[randomNum]
        }
        passThreeEl.textContent = pass3

        for(i = 1; i < 15; i++){
            let randomNum = Math.floor(Math.random() * 92) 
            pass4 += allPossible[randomNum]
        }
        passFourEl.textContent = pass4

        isPassGenerated = true
    }
    else{
        console.log("Passwords already generated")
    }    
}