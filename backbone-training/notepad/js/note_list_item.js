// js/note_list_item.js
// 個々のメモを表す子ビュー

App.NoteListItemView = Backbone.View.extend({

  tagName: 'tr',

  initialize: function() {
    // モデルのdestroyイベントを監視してBackbone.Viewのremove()メソッドを呼び出す
    this.listenTo(this.model, 'destroy', this.remove);
  },

  // [Delete]ボタンを監視して、onclickDelete()メソッドを呼び出す
  events: {
    'click .js-delete': 'onclickDelete'
  },

  render: function() {
    var template = $('#noteListItemView-template').html();
    var html = _.template(template, this.model.toJSON());
    this.$el.html(html);
    return this;
  },

  onclickDelete: function() {
    // モデルを削除する
    this.model.destroy();
  }
})
