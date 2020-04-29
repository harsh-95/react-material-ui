import React, { Component } from "react";
import { Header, Footer } from "./Layouts";
import Exercise from "./Exercises/";
import { muscles, exercises } from "../store";

export default class App extends Component {
  state = {
    exercises: exercises,
    category: "",
    exercise: {}
  };

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

  handleExcerciseSelect = id => {
    console.log(id);
    this.setState(prevState => ({
      exercise: prevState.exercises.find(ex => ex.id === id)
    }));
  };

  handleExerciseCreate = (exercise) => {
    console.log('bb');console.log(exercise);console.log(this.state.exercises);
    this.setState(({excercises})=>({
      exercises: [...exercises, exercise]
    }))
  }

  render() {
    const exercises = this.fetchExercisesByMuscles();

    return (
      <div>
        <Header
          muscles={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        />
        <Exercise
          exercises={exercises}
          category={this.state.category}
          exercise={this.state.exercise}
          onSelect={this.handleExcerciseSelect}
        />
        <Footer
          muscles={muscles}
          category={this.state.category}
          onSelect={this.handleCategorySelect}
        />
      </div>
    );
  }
}
