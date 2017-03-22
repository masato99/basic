/*****************************************/
//「for文」ミニテスト
/*****************************************/

//① 0〜50までの数値を1つずつ足した合計値を求めてください
var result = 0;

for(var count = 0; count <= 50; count++) {

    result += count;

}

console.log(result);

//合計値は「1275」
//※条件値は「<」ではなく、「<=」になる点に注意！



//② 増減値に「--」を使って10から1の範囲で繰り返した合計値を求めてください
var result = 0;

for(var count = 10; count >= 1; count--) {

  result += count;

}

console.log(result);

//合計値は「55」



//③ 0〜100までの範囲で、「偶数」だけを表示してください
for(var i = 0; i < 100; i++) {

    if(i % 2 !== 0) continue;

    console.log(i);

}

//※「if文」のところで「!==」と書けば反対の意味になる



//④ [2,4,6,1,7]の数値が入った配列を作り、その中にある「1」と「4」だけを表示してください
var items = [2, 4, 6, 1, 7];

for(var i = 0; i < items.length; i++) {

    // 配列の中身が「1」か「4」の時だけ表示する
    if(items[i] === 1) console.log(items[i]);
    if(items[i] === 4) console.log(items[i]);

}

//※「if文」ではなく「switch文」でも構いません
var items = [2, 4, 6, 1, 7];

for(var i = 0; i < items.length; i++) {

    // 配列の中身が「1」か「4」の時だけ表示する
    switch(items[i]) {
        case 1:
          console.log(items[i]);
          break;
        case 4:
          console.log(items[i]);
          break;
    }

}


