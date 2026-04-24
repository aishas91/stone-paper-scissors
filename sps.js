let userScore = 0;
let compScore = 0;
let choices =document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let user_score=document.querySelector("#user-score");
let comp_score=document.querySelector("#comp-score");

const genCompChoice = () => {
    let options =["stone" , "paper" , "scissors"];
    const idx = Math.floor(Math.random() * 3);
    return options[idx];
}

const drawGame = () => {
       msg.innerText = "Game was Draw. Play Again!";
       msg.style.backgroundColor = "orange";
}

const showWinner = (userWin) => {
    if(userWin) {
       msg.innerText = "You Won!";
       msg.style.backgroundColor = "green"
       userScore++;
       user_score.innerText = userScore;
    }else{
       msg.innerText = "You Lose!";
       msg.style.backgroundColor = "black";
       compScore++;
       comp_score.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    //comp choice
    const compChoice = genCompChoice();

    if(userChoice == compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice == "stone"){
            //comp -> paper , scissors
            userWin = compChoice == "paper"? false : true;
        }else if(userChoice == "paper"){
             //comp -> rock, scissors
            userWin = compChoice == "scissors"? false : true;
        }else{
            userWin = compChoice == "rock"? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click" ,() => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    }); 
});