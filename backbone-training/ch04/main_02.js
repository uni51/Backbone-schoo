// DOMイベント
var Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  }
});

var TodoView = Backbone.View.extend({

  template: '<label>' +
            '<input class="toggle" type="checkbox">' +
            '<span><%= title %></span>' +
            '</lable>',

  events: {
    // '.toggle'セレクタで特定できる要素のクリックイベントを監視してtoggleCompleted()メソッドを呼び出す
    // 内部では、this.$el.on()が実行されている
    'click .toggle': 'toggleCompleted'
  },

  render: function() {
    title = this.model.get('title');
    var html = _.template(this.template, this.model.toJSON());
    this.$el.html(html);
    return this;
  },

  toggleCompleted: function(e) {
    // jQueryの仕組みで動いているので、引数eはjQueryのイベントオブジェクトを参照している
    console.log('チェックボックスがクリックされました。');

    // コールバック関数のthisは、現在のビューインスタンスを指す
    console.log(this instanceof TodoView);
  }
});

var todo = new Todo({ title: '牛乳を買う' });

var todoView = new TodoView({
  model: todo
});

$(function(){
  todoView.render().$el.appendTo($(document.body));
});
