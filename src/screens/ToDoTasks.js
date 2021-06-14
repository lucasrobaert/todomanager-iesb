import React, {Component} from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';

import {TaskListView} from '../components/Components';
import {readTasksFromFirebaseAsync} from '../services/FirebaseApi';

const imgCheckList = require('../assets/checklist.png');
const imgPlus = require('../assets/plus.jpeg');

export default class TodoTasks extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    readTasksFromFirebaseAsync(this._fetchTasks.bind(this));
    console.log('Passou no didmount  ' + this.state.tasks);
  }

  _fetchTasks(tasks) {
    const tasksToDo = tasks.filter(t => !t.isDone);
    this.setState({tasks: tasksToDo});
  }

  _goToTask() {
    this.props.navigation.navigate('Task');
  }

  render() {
    return (
      <View style={styles.container}>
        <TaskListView tasks={this.state.tasks} />
        <TouchableOpacity
          style={styles.floatButton}
          onPress={() => this._goToTask()}>
          <Image source={imgPlus} style={styles.img} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 10,
  },
  icon: {
    width: 26,
    height: 26,
  },
  img: {
    width: 50,
    height: 50,
  },
  floatButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
});
