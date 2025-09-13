let humanScore = 0;
let CompScore = 0;


function getCompChoice() {
    let choice = ['rock','paper','scissor']
    return choice[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    
    return choice = prompt("enter a value rock,paper or scissor").toLowerCase();
}

function playground(user,comp) {

    console.log(`computer choce = ${comp}`)
    if (user == comp){
        console.log("its a draw")
        return;
    }

    const winMap = {
        rock : 'scissor',
        paper : 'rock',
        scissor : 'paper'
    }
    if(winMap[user] === comp){
        console.log("you win")
        humanScore++
    }
    else {
        console.log("computer wins")
        CompScore++
    }


}

function Game() {
    console.log("game begins, best of 5 rounds")

    for(i = 1; i<=5; i++) {
    let user = getHumanChoice();
    let comp = getCompChoice();
    playground(user,comp)
    console.log(`score = ${humanScore}, computer score = ${CompScore}`)

    if(humanScore > CompScore){
        console.log("you win")
    }
    else if (CompScore > humanScore){
        console.log("comp wins")
    }
    else {
        console.log("its a tie")
    }
    }
}
    

Game()




