// js/router.js

App.Router = Backbone.Router.extend({
  routes: {
    'notes/:id': 'showNoteDetail',
    '*actions': 'defaultRoute'
  },

  defaultRoute: function() {
    this.showNoteList();
    this.navigate('notes');
  },

  showNoteList: function(){
    // コレクションを渡して、メモ一覧の親ビューを初期化する
    var noteListView = new App.NoteListView({
      collection: App.noteCollection
    });

    // 表示領域にメモ一覧を表示する
    // App.mainContainerのshow()は受け取ったビューのrender()を実行して、DOM要素を自身のelに挿入する
    App.mainContainer.show(noteListView);
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
  }
});
