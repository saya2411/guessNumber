let initialValue=100;
        let highscore=null;

        let random=generateRandomNumber(100);

        function playAgain(){
        // console.log("play again");
        document.querySelector("body").style.backgroundColor="black";
        document.querySelector("input").style.backgroundColor="black";

        document.querySelector("#check").style.visibility="visible";
        document.querySelector("#boxpara").textContent='?';

        document.querySelector(".message").textContent = "Start Guessing...";
        document.getElementById("guessid").value='';
        document.querySelector('.score').textContent=100;
        
        random=generateRandomNumber(100);

        // console.log(random);        
    }

        function generateRandomNumber(max){
            return Math.floor(Math.random()*max) + 1;

        }

        // console.log(random);

        function check(){
            let currentNumber = document.getElementById("guessid").value;

        if (initialValue!==0){

        if(currentNumber > random){
            document.querySelector(".message").textContent = "Your Guess is High 🤦‍♀️";
            initialValue--;
            document.querySelector(".score").textContent=initialValue;
        }

        else if(currentNumber < random){
            document.querySelector(".message").textContent = "Your Guess is Low 🤷‍♀️";
            initialValue--;
            document.querySelector(".score").textContent=initialValue;
        }
        else{
            document.querySelector(".message").textContent="🙌Your Guess is Correct!!🙌";
            initialValue--;
            document.querySelector(".score").textContent=initialValue;

            highscore=initialValue;
            document.querySelector(".highscore").textContent=highscore;

            let num= document.querySelector("#boxpara").textContent=currentNumber;
            

            document.body.style.background="green";
            document.querySelector("#check").style.visibility="hidden";
            document.querySelector("input").style.backgroundColor="green";
            document.querySelector("input").style.color="white";

        }
    }
    else{
        document.querySelector(".message").textContent="Game Over";
    }
    }