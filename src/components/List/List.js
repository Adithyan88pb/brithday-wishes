import React from "react";

function List({ people }) {
  return (
    <>
      {people.map((person) => (
        <article className="person" key={person.id}>
          <img src={person.image} alt="" />
          <div>
            <h4>{person.name}</h4>
            <p>{person.age} </p>
          </div>
        </article>
      ))}
    </>
  );
}

export default List;
