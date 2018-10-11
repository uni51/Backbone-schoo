// js/note_form.js

App.NoteFormView = Backbone.View.extend({

  render: function() {
    var template = $('#noteForm-template').html();
    var html = _.template(template, this.model.toJSON());
    this.$el.html(html);
    return this;
  },

  events: {
    'submit form': 'onSubmit'
  },

  onSubmit: function(e) {
    e.preventDefault();
    var attrs = {};
    attrs.title = this.$('.js-noteTitle').val();
    attrs.body = this.$('.js-noteBody').val();
    this.trigger('submit:form', attrs);
  }
})
