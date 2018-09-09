$(function() {

	// Model作成
	var MyDataModel = Backbone.Model.extend({
	});

	var myDataModel = new MyDataModel();

	// Collection作成
	var MyDataCollection = Backbone.Collection.extend({
		model: MyDataModel,
		url: 'db.php/mydata',

		initialize:function(){
			this.listenTo(this, 'all', this._debug);
		},

		_debug : function _debug() {
			console.log(arguments);
		},

	});

	var myDataCollection = new MyDataCollection();

	// データをfetchする
	myDataCollection.fetch();

	//var result = myDataCollection.get(1);
	//console.log(result);

	// View作成
	var MyDataItemView = Backbone.View.extend({

		initialize:function(){
			this.listenTo(myDataCollection, 'add', this.render);
		},

		tmpl:_.template($("#mydata_tmpl").html()),

		render(item) {
			var data = item.attributes;
			$('#list').append(this.tmpl(data));
			return this;
		}
	});

	var myDataItemView = new MyDataItemView({model:myDataCollection});
	
	function onclickFind(event){
		var id = $('#my_id').val();
		var result = myDataCollection.get(id);
		$('#list').empty();
		myDataItemView.render(result);
	}

	$('#findBtn').bind('click', onclickFind);

	function onclickCreate(event){

		myDataCollection.create(
			{
				'name': $('#name').val(),
				'mail': $('#mail').val(),
				'tel': $('#tel').val()
			},{
				success: function(collection, result, options) {
					$('#name').val('');
					$('#mail').val('');
					$('#tel').val('');
				},
				error: function(){}
			}
		);
	}

	$('#createBtn').bind('click', onclickCreate);

});
