import React, { Component } from "react";
import { Header, Footer } from "./Layouts";
import Exercise from "./Exercises/";
import { muscles, exercises } from "../store";

export default class App extends Component {
  state = {
    exercises: exercises,
    category: ""
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

  render() {
    const exercises = this.fetchExercisesByMuscles();
    return (
      <div>
        <Header />
        <Exercise exercises={exercises} category={this.state.category} />
        <Footer
          muscles={muscles}
          category={this.state.category}
          onSelect={this.handleCategorySelect}
        />
      </div>
    );
  }
}
