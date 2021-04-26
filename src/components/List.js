import React, { useState, useEffect } from "react";
import Person from "./person";

export default function List() {
  const [List, setList] = useState([]);

  useEffect(() => {
    fetch("http://174.138.103.233/api/employees")
      .then((response) => response.json())
      .then((data) => setList(data));

    document.title = `you clicked ${list.leght} times`;
  }, []);
  const personList = getPersonList(list);
  return <table>{List.map((p) => <Person person={p} />}</table>;
}
