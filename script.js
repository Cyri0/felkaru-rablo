let kredit_b = document.getElementById("credit")
let bet_b = document.getElementById("bet")
let winner_paid_b = document.getElementById("winnerPaid")
kredit_b.innerHTML = 200
bet_b.innerHTML = 0
winner_paid_b.innerHTML = "-"

function bet(){
    let kredit = parseInt(kredit_b.innerHTML)
    let bet = document.getElementById("betinput").value
    
    if(bet <= kredit)
        {
            bet_b.innerHTML = bet
            kredit_b.innerHTML = kredit - bet
        }
    else {
        alert("Nincs elég kredited!")
    }
}

let random0 = 1 + Math.floor(Math.random() * 8);
let random1 = 1 + Math.floor(Math.random() * 8);
let random2 = 1 + Math.floor(Math.random() * 8);

const porgok = document.getElementsByClassName("porgo")

porgok[0].innerHTML = '<img src="kepek/'+ random0 +'.png">'
porgok[1].innerHTML = '<img src="kepek/'+ random1 +'.png">'
porgok[2].innerHTML = '<img src="kepek/'+ random2 +'.png">'

var rolling = setInterval(roll, 200);
let counter = 1
function roll(){
    porgok[0].innerHTML = '<img src="kepek/'+ counter +'.png">'
    if(counter == random0){
        clearInterval(rolling)
    } else{
        counter++
    }
}