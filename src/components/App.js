import React, { useState, useEffect } from "react";
import { Header, Footer } from "./Layouts";
import Exercise from "./Exercises/";
import { muscles, exercises } from "../store";

fetchExercisesByMuscles = () => {
  return Object.entries(
    exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise;

      exercises[muscles] = exercises[muscles]
        ? [...exercises[muscles], exercise]
        : [exercise];
      return exercises;
    }, {})
  );
};

export default function App() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    setExercises(fetchExercisesByMuscles());
  }, []);

  return (
    <div>
      <Header />
      <Exercise exercises={exercises} />
      <Footer />
    </div>
  );
}
