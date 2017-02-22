import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import TodoActions from '../actions/TodoActions';
import TodoStore from '../stores/TodoStore';

module.exports = React.createClass({
  propTypes: {
    value: React.PropTypes.string,
  },

  getInitialState: function() {
    return {
      value: '',
    };
  },

  render: function() {
    return (
      <View style={styles.header}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => this.setState({value: text})}
          onBlur={this._save}
          placeholder={'What needs to be done?'}
          value={this.state.value}
        />
      </View>
    );
  },

  _save: function() {
    let text = this.state.value;
    if (text) {
      TodoActions.todoCreate(text);
    }
  }
})
