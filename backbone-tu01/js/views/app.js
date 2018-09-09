// js/views/app.js

var app = app || {};

// The Application
// ---------------

// Our overall **AppView** is the top-level piece of UI.
app.AppView = Backbone.View.extend({

  // Instead of generating a new element, bind to the existing skeleton of
  // the App already present in the HTML.
  el: '.todoapp',

  // Our template for the line of statistics at the bottom of the app.
  statsTemplate: _.template( $('#stats-template').html() ),

  // At initialization we bind to the relevant events on the `Todos`
  // collection, when items are added or changed.
  initialize: function() {
    this.allCheckbox = this.$('.toggle-all')[0];
    this.$input = this.$('.new-todo');
    this.$footer = this.$('.footer');
    this.$main = this.$('.main');

    this.listenTo(app.Todos, 'add', this.addOne);
    this.listenTo(app.Todos, 'reset', this.addAll);
  },

  // Add a single todo item to the list by creating a view for it, and
  // appending its element to the `<ul>`.
  addOne: function( todo ) {
    var view = new app.TodoView({ model: todo });
    $('.todo-list').append( view.render().el );
  },

  // Add all items in the **Todos** collection at once.
  addAll: function() {
    this.$('.todo-list').html('');
    app.Todos.each(this.addOne, this);
  }

});

```

A few notable features are present in our initial version of AppView, including a `statsTemplate`, an `initialize` method that's implicitly called on instantiation, and several view-specific methods.

An `el` (element) property stores a selector targeting the DOM element with an ID of `todoapp`. In the case of our application, `el` refers to the matching `<section id="todoapp" />` element in index.html.

The call to _.template uses Underscore's micro-templating to construct a statsTemplate object from our #stats-template. We will use this template later when we render our view.

Now let's take a look at the `initialize` function. First, it's using jQuery to cache the elements it will be using into local properties (recall that `this.$()` finds elements relative to `this.$el`). Then it's binding to two events on the Todos collection: `add` and `reset`. Since we're delegating handling of updates and deletes to the `TodoView` view, we don't need to worry about those here. The two pieces of logic are:

* When an `add` event is fired the `addOne()` method is called and passed the new model. `addOne()` creates an instance of TodoView view, renders it, and appends the resulting element to our Todo list.

* When a `reset` event occurs (i.e., we update the collection in bulk as happens when the Todos are loaded from Local Storage), `addAll()` is called, which iterates over all of the Todos currently in our collection and fires `addOne()` for each item.

Note that we were able to use `this` within `addAll()` to refer to the view because `listenTo()` implicitly set the callback's context to the view when it created the binding.

Now, let's add some more logic to complete our AppView!

```javascript

// js/views/app.js

var app = app || {};

// The Application
// ---------------

// Our overall **AppView** is the top-level piece of UI.
app.AppView = Backbone.View.extend({

  // Instead of generating a new element, bind to the existing skeleton of
  // the App already present in the HTML.
  el: '.todoapp',

  // Our template for the line of statistics at the bottom of the app.
  statsTemplate: _.template( $('#stats-template').html() ),

  // New
  // Delegated events for creating new items, and clearing completed ones.
  events: {
    'keypress .new-todo': 'createOnEnter',
    'click .clear-completed': 'clearCompleted',
    'click .toggle-all': 'toggleAllComplete'
  },

  // At initialization we bind to the relevant events on the `Todos`
  // collection, when items are added or changed. Kick things off by
  // loading any preexisting todos that might be saved in *localStorage*.
  initialize: function() {
    this.allCheckbox = this.$('.toggle-all')[0];
    this.$input = this.$('.new-todo');
    this.$footer = this.$('.footer');
    this.$main = this.$('.main');

    this.listenTo(app.Todos, 'add', this.addOne);
    this.listenTo(app.Todos, 'reset', this.addAll);

    // New
    this.listenTo(app.Todos, 'change:completed', this.filterOne);
    this.listenTo(app.Todos,'filter', this.filterAll);
    this.listenTo(app.Todos, 'all', this.render);

    app.Todos.fetch();
  },

  // New
  // Re-rendering the App just means refreshing the statistics -- the rest
  // of the app doesn't change.
  render: function() {
    var completed = app.Todos.completed().length;
    var remaining = app.Todos.remaining().length;

    if ( app.Todos.length ) {
      this.$main.show();
      this.$footer.show();

      this.$footer.html(this.statsTemplate({
        completed: completed,
        remaining: remaining
      }));

      this.$('.filters li a')
        .removeClass('selected')
        .filter('[href="#/' + ( app.TodoFilter || '' ) + '"]')
        .addClass('selected');
    } else {
      this.$main.hide();
      this.$footer.hide();
    }

    this.allCheckbox.checked = !remaining;
  },

  // Add a single todo item to the list by creating a view for it, and
  // appending its element to the `<ul>`.
  addOne: function( todo ) {
    var view = new app.TodoView({ model: todo });
    $('.todo-list').append( view.render().el );
  },

  // Add all items in the **Todos** collection at once.
  addAll: function() {
    this.$('.todo-list').html('');
    app.Todos.each(this.addOne, this);
  },

  // New
  filterOne : function (todo) {
    todo.trigger('visible');
  },

  // New
  filterAll : function () {
    app.Todos.each(this.filterOne, this);
  },


  // New
  // Generate the attributes for a new Todo item.
  newAttributes: function() {
    return {
      title: this.$input.val().trim(),
      order: app.Todos.nextOrder(),
      completed: false
    };
  },

  // New
  // If you hit return in the main input field, create new Todo model,
  // persisting it to localStorage.
  createOnEnter: function( event ) {
    if ( event.which !== ENTER_KEY || !this.$input.val().trim() ) {
      return;
    }

    app.Todos.create( this.newAttributes() );
    this.$input.val('');
  },

  // New
  // Clear all completed todo items, destroying their models.
  clearCompleted: function() {
    _.invoke(app.Todos.completed(), 'destroy');
    return false;
  },

  // New
  toggleAllComplete: function() {
    var completed = this.allCheckbox.checked;

    app.Todos.each(function( todo ) {
      todo.save({
        'completed': completed
      });
    });
  }
});
