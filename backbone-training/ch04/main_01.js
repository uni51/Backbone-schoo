// Backbone.Viewによるモデルデータの表示
var Person = Backbone.Model.extend({
  defaults: {
    firstName: '',
    lastName: '',
    email: ''
  }
});

var PersonView = Backbone.View.extend({

  render: function() {
    var template = $('#contact-template').html();
    firstName = this.model.get('firstName');
    lastName = this.model.get('lastName');
    email = this.model.get('email');
    var html = _.template(template, this.model.toJSON());
    this.$el.html(html);

    return this;
  }
});

var alice = new Person({
  firstName: 'Alice',
  lastName: 'Henderson',
  email: 'alice@example.com'
});

var AliceView = new PersonView({
  model: alice
});

$(function(){
  AliceView.render().$el.appendTo($(document.body));
});
