$(function() {
	// View作成
	var MyView = Backbone.View.extend({
		el: '#msg',
		tmpl: _.template($("#myview-template").html()),

		render: function() {
			this.$el.html(this.tmpl({
				'title': '山田太郎',
				'content': '○○銀行勤務<br>email: taro@yamada',
			}));
			return this;
		}
	});

	var myView = new MyView();
	myView.render();
});
