$(function() {
	// メッセージ表示用のView  ------------------------------------------ //
	var MyView = Backbone.View.extend({
		el: '#msg',

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


	// 入力フィールドのView ------------------------------------------ //
	var InputView = Backbone.View.extend({
		el:'#input1',

		events:{
			'keypress': 'onkeydown'
		},

		onkeydown(event){
			this.value = this.$el.val();
		}
	});

	var inputView = new InputView();


	// プッシュボタンのView ------------------------------------------ //
	var ButtonView = Backbone.View.extend({
		el:'#btn1',
		input: null,
		msg: null,

		initialize: function(obj) {
			this.input = obj.input;
			this.msg = obj.msg;
			this.$el.val('click');
		},

		events:{
			'click': 'onclick'
		},

		onclick(event){
			var str = this.input.$el.val();
			this.msg.$el.text('typed: ' + str);
		}
	});

	var buttonView = new ButtonView({
		input:inputView, msg:myView
	});

});
