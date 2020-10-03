let player;
let count=0;
let player1score = 0;
let player2score = 0;
let player1hits = 0;
let player2hits = 0;
let player1name = "";
let player2name = "";
let overs = 0;

function inputPlayers() {
    player1name = prompt("Please enter player1 name:");
    player2name = prompt("Please enter player2 name:");
    overs = prompt("Please number of balls :");
    document.getElementById("winner").innerHTML = overs +" number of balls will be played for this match";
    document.getElementById("runs").innerHTML =  player1name +  " play now";
    document.getElementById("score1").innerHTML= player1name +"'s score: " +player1score + " hits: " + player1hits;
    document.getElementById("score2").innerHTML= player2name +"'s score: " +player2score + " hits: " + player2hits;

}

function hitBat() {
    let hitCount = 0;
    // document.getElementById("bat").innerHTML = "\\" ;
    document.getElementById("bat").style.transform= "skewX(50deg)";
    count++;
    if(count%2 === 0) {//player2
        player2hits++;
        player =2;
        hitCount = Math.floor(Math.random() * 10); 
        player2score += hitCount;
        document.getElementById("score2").innerHTML= player2name +"'s score: " +player2score + " hits: " + player2hits;
        if (player2hits === parseInt(overs)) {
            console.log("Match is over")
            decideWinner();
            return;
        } 
    }
    else {
        player1hits++;
        player =1;
        hitCount = Math.floor(Math.random() * 10); 
        player1score += hitCount;
        document.getElementById("score1").innerHTML= player1name +"'s score: " +player1score + " hits: " + player1hits;
    }
    document.getElementById("ball").style.left = 31 + (hitCount*10) ;
    document.getElementById("hitBat").disabled = true;

    const timerBat = setTimeout(()=> {
        resetPlay();
        document.getElementById("hitBat").disabled = false;
    }, 1300)
    document.getElementById("runs").innerHTML = "You hit : " + hitCount;
}
function resetPlay() {
    hitCount = 0;
    document.getElementById("bat").style.transform= "skewX(0deg)";
    document.getElementById("ball").style.left = 31;
    const nextPlayer = player === 1 ? player2name : player1name;
    document.getElementById("runs").innerHTML =  nextPlayer +  " play now" 
}

function decideWinner() {
    document.getElementById("runs").innerHTML =  "Congratulations!";
    document.getElementById("hitBat").disabled = true;
    if (player1score > player2score) {
        document.getElementById("winner").innerHTML = "Match is over! Here's the winner : " + player1name;
    }
    else {
        document.getElementById("winner").innerHTML = "Match is over! Here's the winner : " + player2name;
    }
    setTimeout(()=> {
        const playAgain = document.createElement("button");
        playAgain.innerHTML = "Play Again";
    }, 1000)
}