/*****************************************/
//「for - in文」ミニテスト
/*****************************************/

//① オブジェクトに「'母国語': '日本語'」を追加して「日本語」だけが表示されるようにしてください
var friends = {

    name: '佐藤',
    age: 32,
    address: '東京都新宿区',
    '趣味': 'プログラミング',
    '母国語': '日本語'

}


for( var list in friends ) {

  if( friends.hasOwnProperty( list ) ) {

    // プロパティの値が「日本語」の時だけ表示する
    if( friends[list] === '日本語' ) console.log( friends[list] );

  }

}

//※基本的に「hasOwnProperty」は省略しないようにしましょう。




//② オブジェクトのプロパティの値を必ず順番通りにすべて表示するように変更してください
var friends = {

    name: '佐藤',
    age: 32,
    address: '東京都新宿区',
    '趣味': 'プログラミング'
    
}
var keys = Object.keys(friends);

for(var i = 0; i < keys.length; i++) {
  
  console.log(friends[ keys[i] ]);
  
}

//※オブジェクトのプロパティを順番通りに取得する必要がある場合は「Object.keys()」を使いましょう




//③ すべての出力結果を「プロパティ名（値）」のような形式で表示するように変更してください。（順番は不問）
var friends = {

    name: '佐藤',
    age: 32,
    address: '東京都新宿区',
    '趣味': 'プログラミング'
    
}


for( var list in friends ) {

  if( friends.hasOwnProperty( list ) ) {
    
    console.log( list + '（' + friends[list] + '）' );

  }

}

//※「プロパティ名」と「プロパティの値」の表示方法をしっかり区別しておきましょう


