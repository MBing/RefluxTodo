import Reflux from 'reflux';
import _ from 'underscore';

import TodoActions from '../actions/TodoActions';

module.exports = Reflux.createStore({
  listenables: [TodoActions],

  todos: {},

  onTodoCreate: function(text) {
    let id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    this.todos[id] = {
      id: id,
      complete: false,
      text: text,
    };
    this.trigger(null);
  },
  onTodoUpdate: function (id, updates) {
    this.todos[id] = _extend({}, this.todos[id], updates);
    this.trigger(null);
  },
  onTodoComplete: function (id) {
    this.onTodoUpdate(id, {complete: true});
  },
  onTodoUndoComplete: function (id) {
    this.onTodoUpdate(id, {complete: false});
  },
  onTodoDestroy: function(id) {
    delete this.todos[id];
    this.trigger(null);
  },

  getAll: function() {
    return _.values(this.todos);
  }
});
