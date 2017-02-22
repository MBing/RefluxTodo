import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Reflux from 'reflux';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default class TodoApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TodoForm />
        <TodoList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});