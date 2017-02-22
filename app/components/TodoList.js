import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
} from 'react-native';
import Reflux from 'reflux';

import TodoStore from '../stores/TodoStore';
import TodoItem from './TodoItem';

module.exports = React.createClass({
  mixins: [Reflux.listenTo(TodoStore, 'handlerTodoUpdate')],

  getInitialState: function() {
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });
    return {
      todoDataSource: ds.cloneWithRows(TodoStore.getAll()),
    };
  },

  handlerTodoUpdate: function(err) {
    if (err) {
      return
    }

    this.setState({
      todoDataSource: this.state.todoDataSource.cloneWithRows(TodoStore.getAll()),
    });
  },

  render: function () {
    return (
      <ListView
        dataSource={this.state.todoDataSource}
        renderRow={rowData => <TodoItem todo={rowData} />}
      />
    );
  },
});

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: '#0FF',
  },
});
