$(function() {
	// View作成
	var MyTagView = Backbone.View.extend({
		tagName: 'p',
		className: 'msg',
		id: function(){ return _.uniqueId('item'); },
		attributes: {
			'style': 'color:white; background:red; padding:5px 10px;'
		}
	});

	var myTag = new MyTagView();
	myTag.el.textContent = "これは新たに追加したタグです。";
	$('#msg').html(myTag.el)
});
