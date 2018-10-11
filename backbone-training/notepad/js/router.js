// js/router.js

App.Router = Backbone.Router.extend({
  routes: {
    'notes/:id': 'showNoteDetail',
    'new': 'showNewNote',
    '*actions': 'defaultRoute'
  },

  defaultRoute: function() {
    this.showNoteList();
    this.navigate('notes');
  },

  showNoteList: function() {
    // コレクションを渡して、メモ一覧の親ビューを初期化する
    var noteListView = new App.NoteListView({
      collection: App.noteCollection
    });

    // 表示領域にメモ一覧を表示する
    // App.mainContainerのshow()は受け取ったビューのrender()を実行して、DOM要素を自身のelに挿入する
    App.mainContainer.show(noteListView);
    // メモ一覧操作ビューを表示するメソッドの呼び出しを追加する
    this.showNoteControl();
  },

  // メモ一覧操作ビューを表示するメソッドを追加する
  showNoteControl: function() {
    var noteControlView = new App.NoteControlView();
    App.headerContainer.show(noteControlView);
  },

  // ルーティングが受け取った:idパラメータはそのまま引数idで受け取れる
  showNoteDetail: function(id) {
    var note = App.noteCollection.get(id);
    var noteDetailView = new App.NoteDetailView({
      model: note
    });
    id = note.get('id');
    title = note.get('title');
    body = note.get('body');
    App.mainContainer.show(noteDetailView);

    // メモの詳細画面ではボタンを消したいので、App.headerContainerのemptyメソッドを呼び出してビューを破棄しておく
    App.headerContainer.empty();
  },

  showNewNote: function() {
    var self = this;
    // テンプレートの<%= title %>などの出力を空文字列で空欄にしておくため、新規に生成したNoteモデルを渡して
    // NoteFormViewを初期化する
    var noteFormView = new App.NoteFormView({
      model: new App.Note()
    });
    title = '';
    body = '';

    noteFormView.on('submit:form', function(attrs) {
      // submit:formイベントで受け取ったフォームの入力値をNoteCollectionコレクションのcreate()に渡して
      // Noteモデルの新規作成と保存を行う
      App.noteCollection.create(attrs);

      // モデル一覧を表示してルートを#notesに戻す
      self.showNoteList();
      self.navigate('notes');
    });

    App.mainContainer.show(noteFormView);
    // [New Note]ボタンはこの画面では必要ないので、ビューを破棄しておく
    App.headerContainer.empty();
  }
});
