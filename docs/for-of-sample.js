/*****************************************/
//「for - of文」ミニテスト
/*****************************************/

//① 配列「arry」を作り、[3, 5, 1, 7, 8]を格納してすべて表示してください
var arry = [3, 5, 1, 7, 8];

for( var number of arry) {
    
    console.log(number);
    
}



//② 変数「text」を作り、文字列「あいうえお」を代入し表示してください
var text = 'あいうえお';

for( var word of text) {
    
    console.log(word);
    
}

//※出力結果が1文字ずつ表示されている点に注目してください。



//③ HTML内に「li要素」があるとして、この要素をすべて表示してください
var li = document.getElementsByTagName('li');

for( var element of li) {
    
    console.log( element );
    
}


