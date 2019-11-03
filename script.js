let wins = 0;
let losses = 0;
let draws=0;
let comp='';
let userChoice='';
let result='';
const winsCount = document.querySelector('.wins-counter')
const drawsCount = document.querySelector('.draws-counter')
const lossesCount = document.querySelector('.losses-counter')
const resultDescription = document.querySelector('.result-description p')
const rock = document.querySelector('.rock-choice')
const paper = document.querySelector('.paper-choice')
const scissors = document.querySelector('.scissors-choice')



const choosen = (e) => {
     userChoice=e.target.attributes.value.value
    computerChoice()
     winner()
}

rock.addEventListener('click', choosen)
paper.addEventListener('click', choosen)
scissors.addEventListener('click', choosen)

const computerChoice=()=>{
    let compNumber=Math.round(Math.random()*2);
    switch(compNumber){
        case 0:
            comp='rock';
            break;
        case 1: 
            comp='paper';
            break;
        case 2: 
            comp='scissors';
            break;
    }
}

const winner=()=>{
    if (comp==='rock' && userChoice==='paper' || comp==='paper' && userChoice==='scissors' || comp==='scissors' && userChoice==='rock' ){
        result='You win'
        wins=wins+1
        winsCount.innerHTML=wins;
    } else if (comp==='rock' && userChoice==='rock' || comp==='paper' && userChoice==='paper' || comp==='scissors' && userChoice==='scissors' ){
        result='Draw'
        draws=draws+1
       drawsCount.innerHTML=draws;
    } else {
        result='You lose'
       losses=losses+1
       lossesCount.innerHTML=losses;}

resultDescription.innerHTML = `Your choice: <strong>${userChoice}</strong>, Computer choice: <strong>${comp}</strong>. <strong>${result}!</strong>`
}