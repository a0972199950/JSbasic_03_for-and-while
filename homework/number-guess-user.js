var min = 1;
var max = 100;
var answer = Math.floor(Math.random() * (max - min) + min);

var isWin = null;
var isFirstTime = true;

do{
    if(isFirstTime){
        var guess = Number(prompt(`請猜一個數字，介於${min}到${max}之間`));
    } else {
        var guess = Number(prompt(`錯！答案介於介於${min}到${max}之間\n再猜一次吧`));
    };

    if(guess === 0){
        isWin = false;
        break;
    };


    if(guess === answer){
        isWin = true;

    } else if(guess > answer){       
        max = guess;

    } else {
        min = guess;
    }

} while(isWin === null);


if(isWin){
    alert("猜對了！答案就是" + answer);
} else {
    alert("拜拜，下次再玩吧");
}