import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Exercise from "./Exercises/";
import { muscles, exercises } from "../store";

import { Provider } from '../context';

export default class App extends Component {
  state = {
    exercises: exercises,
    category: "",
    exercise: {}
  };

  getContext = () => ({
    ...this.state,
    muscles,
    exercises: this.fetchExercisesByMuscles(),
    onCreate: this.handleExerciseCreate,
    onSelectCategory: this.handleCategorySelect,
    onDelete: this.handleExerciseDelete,
    onSelectEdit: this.handleExerciseSelectEdit,
    onEditExercise: this.handleSubmitEditExercise,
    onSelect: this.handleExerciseSelect
  })

  fetchExercisesByMuscles = () => {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];
        return exercises;
      }, {})
    );
  };

  handleCategorySelect = value => {
    console.log(value);
    this.setState({
      category: value
    });
  };

  handleExerciseSelect = id => {
    console.log(id);
    this.setState(prevState => ({
      exercise: prevState.exercises.find(ex => ex.id === id),
      editMode: false
    }));
  };

  handleExerciseCreate = (exercise) => {
    console.log('bb');console.log(exercise);console.log(this.state.exercises);
    this.setState(({exercises})=>({
      exercises: [...exercises, exercise]
    }))
  }

  handleExerciseDelete = (id) => {
    this.setState(({exercises})=>({
      exercises: exercises.filter((ex)=> ex.id !== id),
      editMode: false,
      exercise:{}
    }))
  }

  handleExerciseSelectEdit = (id) => {
      console.log(id);
      this.setState(prevState => ({
        exercise: prevState.exercises.find(ex => ex.id === id),
        editMode: true
      }));
  }

  handleSubmitEditExercise = exercise => {
    this.setState(({exercises})=>({
        exercises: [
          ...exercises.filter((ex)=> ex.id !== exercise.id),
          exercise
        ],
        editMode: false,
        exercise
    }))
  }

  render() {
    return (
      <Provider value={this.getContext()}>
        <Header />
        <Exercise />
        <Footer />
      </Provider>
    );
  }
}
