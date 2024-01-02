import React, { useState } from "react";
import List from "../List/List";
import { data } from "../../StaticData/data";

function Home() {
  const [people, setPeople] = useState(data);
  const clear = () => {
    setPeople([]);
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length}Birthday today</h3>
        <List people={people} />
        <button onClick={clear}>Clear All</button>
      </section>
    </main>
  );
}

export default Home;
