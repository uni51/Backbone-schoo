// js/note_detail.js

App.NoteDetailView = Backbone.View.extend({

  render: function() {
    var template = $('#noteDetailView-template').html();
    var html = _.template(template, this.model.toJSON());
    this.$el.html(html);
    return this;
  }
});
