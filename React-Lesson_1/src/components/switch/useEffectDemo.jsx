import { useState, useEffect } from "react";

const UseEffectDemo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );

      const data = await response.json();

      if (data && data.length) setData(data);
    }

    getData();
  }, [data]);

  return (
    <div>
      <ul>
        {data.map((todos) => (
          <li key={todos.id}>{todos.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseEffectDemo;
