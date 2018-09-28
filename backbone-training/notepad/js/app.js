// js/app.js

window.App = {};

$(function() {
  // ダミーのコレクションを生成する
  var noteCollection = new App.NoteCollection([{
    title: 'テスト1',
    body: 'テスト1です。'
  }, {
    title: 'テスト2',
    body: 'テスト2です。'
  }]);

  // メモ一覧のビューを表示する領域としてApp.Containerを初期化する
  var mainContainer = new App.Container({
    el: '#main-container'
  })

  // コレクションを渡して、メモ一覧の親ビューを初期化する
  var noteListView = new App.NoteListView({
    collection: noteCollection
  });

  // 表示領域にメモ一覧を表示する
  // App.Containerのshow()は受け取ったビューのrender()を実行して、DOM要素を自身のelに挿入する
  mainContainer.show(noteListView);
});
