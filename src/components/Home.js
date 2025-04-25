import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  return (
    <div>
      <h1>Welcome, {name}!</h1>
      <p>Based in {city}</p>
    </div>
  );
}

export default Home;
