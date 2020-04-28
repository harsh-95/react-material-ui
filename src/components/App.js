import React from "react";
import { Header, Footer } from "./Layouts";
import Exercise from "./Exercises/";

export default function App() {
  return (
    <div>
      <Header />
      <Exercise />
      <Footer />
    </div>
  );
}
