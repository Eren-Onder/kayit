import React, { useState, useEffect } from "react";
import Person from "./person";
import PersonHeader from "./personHerader";

export default function List(props) {
  const [List, setList] = useState([]);

  useEffect(() => {
    fetch("http://174.138.103.233/api/employees")
      .then((response) => response.json())
      .then((data) => setList(data));
  }, []);

  return (
    <table>
      {props.test}
      <PersonHeader />
      {List.map((p) => (
        <Person person={p} />
      ))}
    </table>
  );
}
