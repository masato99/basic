let name1 = 'イチゴ';
const name2 = 'バナナ';

name1 = 'メロン';
console.log(name1);

name2 = 'スイカ';
console.log(name2);

//回答
//name1はメロン。name2はエラー
//
//constで定義された変数は再定義＆再代入ができない


//--------------------------//


let name1 = 'イチゴ';
let name2 = 'バナナ';

let name1 = name2;

//回答
//name1はエラー。name2はバナナ
//
//letで定義された変数は再代入はできるが再定義はできない


//--------------------------//


const myobj = {
  name: 'イチゴ',
  price: 300
}

myobj.name = 'メロン';

console.log(myobj.name);

//回答
//name1はエラー。name2はバナナ
//
//constで定義された値がオブジェクトの場合は再代入できる


//--------------------------//


let name1 = 'イチゴ';

if(true) {
  var name2 = 'バナナ';
  
  name1 = 'メロン';
}

//回答
//name1の出力はメロン。name2の出力はバナナ。
//
//varで定義された変数はブロックスコープが無い


//--------------------------//


let name1 = 'イチゴ';

if(true) {
  let name2 = 'バナナ';
  
  name1 = 'メロン';
}

console.log(name1);
console.log(name2);

//回答
//name1の出力はメロン。name2の出力はエラー。
//
//let / constで定義された変数はブロックスコープがある


//--------------------------//


let name1 = 'イチゴ';

function sample() {
  var name2 = 'バナナ';
  
  name1 = 'メロン';
}

sample();

console.log(name1);
console.log(name2);

//回答
//name1の出力はメロン。name2の出力はエラー。
//
//関数内であればvarで定義された変数にもスコープが適用される


//--------------------------//


const items = ['イチゴ', 'バナナ', 'メロン', 'スイカ'];

items[0] = 'ミカン';

console.log(items);

//回答
//itemsの中身は["ミカン", "バナナ", "メロン", "スイカ"]
//
//constで定義された変数の値が配列の場合は再代入ができる


//--------------------------//


const items = ['イチゴ', 'バナナ', 'メロン', 'スイカ'];

items[1] = [1,2,3,4,5];
items[1][2] = [true, false];

//回答
//items[1][2][0]
//
//配列の要素内には別の配列を次々と格納することができる。値の取得には添字にインデックス番号を付与する


//--------------------------//


const items = [0,1,2,3,4,5,6,7,8,9];

for(let i=0; i<items.length; i++) {
  if(i % 2 === 0) {
    console.log(items[i]);
  }
}

//回答
//出力結果は、0,2,4,6,8
//
//インデックス番号を利用すれば奇数・偶数などの条件で取得することもできる


//--------------------------//


const items = ['太郎', '二郎', '三郎', '四郎'];

items.slice(1);
items.push('五郎');

console.log(items);

//回答
//["太郎", "二郎", "三郎", "四郎", "五郎"]
//
//sliceは配列要素を分割できるが元の配列には影響しない



//--------------------------//


const items = ['太郎', '二郎', '三郎', '四郎'];
const result = items.slice(2).join('と');

console.log(result);

//回答
//三郎と四郎
//
//joinは引数に指定した値を区切り文字として利用することができる


//--------------------------//


const items = ['太郎'];

items.forEach(function(a,b,c) {
  console.log(a);
  console.log(b);
  console.log(c);
});

//回答
//aは配列要素、bはインデックス番号、cは現在処理している配列
//
//forEachのコールバック関数は3つの引数を取得することができる


//--------------------------//


function showLog() {

    console.log('Hello Function');

}

//回答
//showLog()
//
//関数を定義する際に付けた関数名に()を付与することで実行できる


//--------------------------//


// 1つ目の関数
function showLog() {
  console.log('Hello Function');
}

// 2つ目の関数
const showLog2 = function() {
  console.log('Hello Function');
}

// 3つ目の関数
const showLog3 = new Function('console.log("Hello Function");');

//回答
//すべて正しく動作する
//
//関数定義、関数式、Functionオブジェクトを利用した定義方法がある


//--------------------------//


// 1つ目の関数
const showLog = () => console.log('Hello Function');

// 2つ目の関数
const showLog3 = name => console.log('Hello ' + name);

// 3つ目の関数
const showLog2 => console.log('Hello Function');

//回答
//1つ目と2つ目だけ正しく動作する
//
//アロー関数にはいくつか省略形の書き方があるので要注意。3つ目の場合引数がなくても()が必要


//--------------------------//


function showLog(name, age) {
  console.log(name + 'さんの年齢は' + age + '歳です');
}

showLog('太郎', '30', '東京都');

//回答
//太郎さんの年齢は30歳です
//
//設定した引数よりも多い引数を記述してもエラーは出ない


//--------------------------//


function showLog(name) {
  return 'こんにちは、' + name + 'さん';
}

showLog('太郎');

//回答
//何も表示されない
//
//returnは値を返すという意味なのでこの場合はconsole.log()などを使わないと出力されない


//--------------------------//


const myobj = {
  showLog1: function() {
    console.log(this);
    
    function showLog2() {
      console.log(this);
    }
    
    showLog2();
  }
}

myobj.showLog1();

//回答
//showLog1のthisはmyobjを意味し、showLog2のthisはwindowオブジェクトを意味している
//
//メソッドに定義された関数と普通に定義した関数ではthisの値が異なることに注意

