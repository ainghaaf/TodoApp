import React from "react";
import "./App.css";
import { Header, Footer, TodoApp } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoApp />
      <Footer />
    </div>
  );
}

export default App;
