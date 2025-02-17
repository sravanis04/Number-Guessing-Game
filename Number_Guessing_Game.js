const minNum=1;
const maxNum=100;
const answer=Math.floor(Math.random()*(maxNum-minNum+1))+minNum;

let attempts=0;
let guess;
let running=true;

while(running){
    guess=window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    guess=Number(guess);

    if(isNaN(guess)){
        window.alert("Invalid number!");
    }
    else if(guess<minNum && guess>maxNum){
        window.alert("Invalid number!");
    }
    else{
        attempts++;
        if (guess<answer){
            window.alert("TOO LOW! try again");
        }
        else if(guess>answer){
            window.alert("TOO HIGH ! try again");
        }
        else{
            window.alert(`CORRECT ! the answer is ${answer}. It took ${attempts}`);
        }
    }
}