/*****************************************/
//「forEach文」ミニテスト
/*****************************************/

//① 配列データの偶数番目だけを表示してください
var items = ['バナナ', 'リンゴ', 'メロン', 'ブドウ', 'イチゴ', 'ミカン'];

items.forEach(function(value, index, array) {
  
  if(index % 2 === 0) console.log(value);

});

//※配列のインデックス番号は、引数の「index」を使うことができます



//② [2, 4, 9, 1, 7]の配列を作り、すべての値を2倍にして表示してください
var items = [2, 4, 9, 1, 7];

items.forEach(function(value, index, array) {

  console.log( value * 2 )

});



//③ ②の配列に格納されている「元データ」を2倍にして再格納し、その配列を表示してください
var items = [2, 4, 9, 1, 7];

items.forEach(function(value, index, array) {

  //引数「array」を使ってデータを再格納する
  array[index] = value * 2;

});

//配列を表示する
console.log(items);

//※引数「array」には、現在処理している配列データが格納されています

