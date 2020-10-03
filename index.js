let player;
            let count=0;
            let player1score = 0;
            let player2score = 0;
            let player1hits = 0;
            let player2hits = 0;
            function hitBat(){
                let hitCount = 0;

                // document.getElementById("meraBat").innerHTML = "\\" ;
                document.getElementById("meraBat").style.transform= "skewX(50deg)";
                count++;
                if(count%2 === 0) {//player2
                    player2hits++;
                    player =2;
                    hitCount = Math.floor(Math.random() * 10); 
                    player2score += hitCount;
                    document.getElementById("score2").innerHTML= "Player 2 score: " +player2score + " hits: " + player2hits;
                }
                else {
                    player1hits++;
                    player =1;
                    hitCount = Math.floor(Math.random() * 10); 
                    player1score += hitCount;
                    document.getElementById("score1").innerHTML= "Player 1 score: " +player1score + " hits: " + player1hits;
                }
                document.getElementById("meraBall").style.left = 31 + (hitCount*10) ;
                document.getElementById("hitBat").disabled = true;

                const timerBat = setTimeout(()=> {
                    resetPlay();
                    document.getElementById("hitBat").disabled = false;
                }, 1300)
                document.getElementById("runs").innerHTML = "You hit : " + hitCount;
            }
            function resetPlay() {
                hitCount = 0;
                document.getElementById("meraBat").style.transform= "skewX(0deg)";
                document.getElementById("meraBall").style.left = 31;
                const nextPlayer = player === 1 ? 2 : 1
                document.getElementById("runs").innerHTML = "Player " + nextPlayer +  " play now" 
            }