$(function() {
	// View作成
	var ButtonView = Backbone.View.extend({
		el:'#btn1',

		events:{
			'click': 'onclick'
		},

		onclick(event){
			alert('click me!');
		}
	});

	var buttonView = new ButtonView();

});
