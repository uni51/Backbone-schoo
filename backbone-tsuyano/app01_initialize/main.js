$(function() {
	// View作成
	var MyView = Backbone.View.extend({
		el:'#msg',

		initialize: function() {
			this.$title = $('#title');
			this.$item1 = $('#item1');
			this.$item2 = $('#item2');
			this.$item3 = $('#item3');
		},

		render: function() {
			this.$title.text('※利用プラットフォーム');
			this.$item1.text('Windows');
			this.$item2.text('macOS');
			this.$('#item3').text('Linux');
			return this;
		}
	});

	var myView = new MyView();
	myView.render();
});
