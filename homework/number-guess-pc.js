/******初始版本*****/
var min = Number(prompt(`開始遊戲吧，請輸入數字下限`));
var max = Number(prompt(`開始遊戲吧，請輸入數字上限`));

var isRight = "no", 
    guess, 
    last;


while(isRight !== "對"){

    if(guess){
        
        if(isRight === "大"){
            min = guess;
        } else if(isRight === "小"){
            max = guess;
        };

    };    

    // TODO: Math物件要先教，random要講詳細
    while(guess === last){
        guess = Math.floor(Math.random() * (max - min - 1) + (min + 1));
    };

    last = guess;

    while(true){
        isRight = prompt(`範圍是${min}~${max}。我猜是 ${guess}，對不對？對的話輸入"對"，錯的話到訴我答案比較"大"還是"小"`);

        // TODO: break要先教
        if(isRight === "對" || isRight === "大" || isRight === "小") break;

        alert(`只能輸入"對" 或 "大" 或 "小"喔，請重新輸入`);
    };

};

alert(`yes, 我就知道!!`);













var min = Number(prompt(`來玩終極密碼吧，請輸入數字下限`));
var max = Number(prompt(`請輸入數字上限`));
var isWin = null;


while(isWin === null){
    var guess = Math.floor(Math.random() * (max - min + 1) + min);

    var result = prompt(`數字介於${min}到${max}之間，我猜是${guess}對不對？\n對的話請輸入「對」\n錯的話請輸入我猜得太「大」還是太「小」`);

    switch(result){
        case "對":
            isWin = true;
            break;

        case "大":
            max = guess;
            break;

        case "小":
            min = guess;
            break;

        case null:
            isWin = false;
            break;

        default:
            alert("無法辨認輸入的內容，只能輸入「對」「大」或「小」\n請重新輸入");
    }
}

if(isWin){
    alert("Yes! 我就知道");
} else {
    alert("拜拜，下次再玩吧~");
};
