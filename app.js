/********** 【for】**********/

// 單次遞增迴圈(印1~100)
for(var i = 1; i <= 100; i++){
    console.log(i);
}


// 單次以上遞增迴圈(印偶數)
for(var i = 2; i <= 100; i+=2){
    console.log(i);
}


// 次數寫死的迴圈
alert("我們一起學貓叫，一起");
var str = "";
for(var i = 1; i <= 5; i++){
    str = str + "喵";
}
alert(str);


// 動態次數的迴圈(唱歌)
var times = Number(prompt("等一下我該喵幾聲呢？"));
alert("我們一起學貓叫，一起");
var str = "";

for(var i = 1; i <= times; i++){
    str = str + "喵";
}
alert(str);


// continute(印偶數)
for(var i = 1; i <= 100; i++){
    if(i % 2 !== 0){
        continue;
    }

    console.log(i);
}


// break
var num = Number(prompt("請輸入一個數字，我會判斷是否為質數"));
var isPrime = true;

for(var i = 2; i < num; i++){
    if(num % i === 0){
        isPrime = false;
        break;
    };
};

console.log(isPrime);


// 巢狀迴圈(印正方形
var height = Number(prompt("請輸入正方形的邊長"));

for(var i = 1; i <= height; i++){

    var str = "";
    for(var j = 1; j <= height; j++){
        str = str + "*";        
    }
    console.log(str);

}


// 巢狀迴圈(印有輪廓的正方形)
var height = Number(prompt("請輸入正方形的邊長"));

for(var i = 1; i <= height; i++){

    var str = "";
    for(var j = 1; j <= height; j++){
        if(i === 1 || i === height || j === 1 || j === height){
            str = str + "o";
        } else {
            str = str + "*";
        }
        
    }
    console.log(str);

}


// 巢狀迴圈(印直角三角形)
var height = Number(prompt("請輸入三角形的高"));

for(var i = 1; i <= height; i++){

    var str = "";
    for(var j = 1; j <= i; j++){
        str = str + "*"
    }
    console.log(str);

}


// 巢狀迴圈(印有輪廓的直角三角形)
var height = Number(prompt("請輸入三角形的高"));

for(var i = 1; i <= height; i++){

    var str = "";
    for(var j = 1; j <= i; j++){
        if(j === 1 || j === i || i === height){
            str = str + "o";
        } else {
            str = str + "*";
        }
        
    }
    console.log(str);

}

// 巢狀迴圈(九九乘法表)
for(var i = 2; i <= 9; i++){
    for(var j = 1; j <= 9; j++){
        console.log(`${i} * ${j} = ${i * j}`);
    };
};



/********** 【while】**********/

// 利用小括號為false來終止
var stillGuessing = true;
var answer = 4;

while(stillGuessing){
    var guess = Number(prompt("請猜一個1~10間的數字"));
    if(guess === answer){
        stillGuessing = false;
    };
};

alert("你猜對了！答案就是" + answer);


// 利用break來終止
var stillGuessing = true;
var answer = 4;

while(stillGuessing){
    var guess = Number(prompt("請猜一個1~10間的數字"));
    if(guess === answer){
        break;
    };
};

alert("你猜對了！答案就是" + answer);


// 使用while實現計次迴圈(印1~100)
var i = 1;
while(i <= 100){
    console.log(i);
    i++;
};


// while與for搭配使用(一直唱歌)
var stillSinging = true;

while(stillSinging){

    var times = Number(prompt("等一下我該喵幾聲呢？"));
    alert("我們一起學貓叫，一起");
    var str = "";
    
    for(var i = 1; i <= times; i++){
        str = str + "喵";
    }
    alert(str);

    stillSinging = confirm("要繼續唱嗎？");
}



/********** 【do-while】**********/

// 第一次要執行的內容與第二次以後不同時(猜1~10內的數字)
var answer = 7;
var stillGuessing = true;
var isFirstTime = true;
do{
    if(isFirstTime){
        var guess = Number(prompt("請猜一個1~10內的數字"));
        isFirstTime = false;
    } else {
        var guess = Number(prompt("猜錯囉，再猜一次"));
    }    

    if(guess === answer){
        stillGuessing = false;
    }

} while(stillGuessing);

alert("猜對了，答案就是" + answer);