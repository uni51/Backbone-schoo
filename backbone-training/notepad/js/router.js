// js/router.js

App.Router = Backbone.Router.extend({
  routes: {
    'notes/:id': 'showNoteDetail'
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
