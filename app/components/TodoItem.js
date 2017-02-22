import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
View,
} from 'react-native';
import Reflux from 'reflux';

import TodoActions from '../actions/TodoActions';

export default class TodoItem extends Component {
  _onToggleComplete(todo) {
    if (todo.complete) {
      TodoActions.onTodoUndoComplete(todo.id);
    } else {
      TodoActions.todoComplete(todo.id);
    }
  }

  _onDestroy(todo) {
    TodoActions.todoDestroy(todo.id);
  }

  render() {
    let todo = this.props.todo;
    let styleTodoItemComplete = (todo.complete) ? styles.todoItemComplete : null;

    return (
      <View>
        <View>
          <Text style={styles.text}>{todo.text}</Text>
          <Text style={styles.text}>{todo.complete}</Text>
          <Text onPress={() => this._onToggleComplete(todo)}>|Mark as done|</Text>
          <Text onPress={() => this._onDestroy(todo)}>|Delete|</Text>
        </View>
        <View style={styles.separator} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  todoItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    height: 58,
  },
  todoComplete: {
    opacity: .3,
  },
  text: {
    flex: 1,
    textAlign: 'left',
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
});
