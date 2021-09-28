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
const porgok = document.getElementsByClassName("porgo")
let random = [];
let counters = [];
function startRoll(){
    random = [ 
        1 + Math.floor(Math.random() * 9),
        1 + Math.floor(Math.random() * 9),
        1 + Math.floor(Math.random() * 9)
        ]
    
    counters = [1,1,1]
    var rolling = setInterval(roll, 200, 0);
    rolling = setInterval(roll, 200, 1);
    rolling = setInterval(roll, 200, 2);
    
    setTimeout(function(){
        kredit_b.innerHTML = parseInt(kredit_b.innerHTML) + bet_b.innerHTML * winnerTest();
        bet_b.innerHTML = 0;
    }, 3000);
}

function roll(num){
    porgok[num].innerHTML = '<img src="kepek/'+ counters[num] +'.png">'
    if(counters[num] == random[num]){
        clearInterval(rolling)
    } else{
        console.log(counters[num])
        counters[num]++
    }
}

function winnerTest(){
    // 3 ugyan az
    if(porgok[0].innerHTML == porgok[1].innerHTML &&
       porgok[1].innerHTML == porgok[2].innerHTML){
           alert("WINNER!")
           return 10;
       }
    // 2 ugyan az
    if(porgok[0].innerHTML == porgok[1].innerHTML ||
       porgok[1].innerHTML == porgok[2].innerHTML ||
       porgok[0].innerHTML == porgok[2].innerHTML){
           alert("DUPLÁZÁS")
           return 2;
       }
    // nincs találat
    alert("SAJNOS NEM NYERT")
    return 0;
}