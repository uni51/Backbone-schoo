// js/note_list_item.js
// 個々のメモを表す子ビュー

App.NoteListItemView = Backbone.View.extend({

  tagName: 'tr',

  render: function() {
    var template = $('#noteListItemView-template').html();
    var html = _.template(template, this.model.toJSON());
    this.$el.html(html);
    return this;
  }
})
