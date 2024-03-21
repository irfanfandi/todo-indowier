"use client";

import { Suspense, useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setcount] = useState(0);

  const getData = async () => {
    setLoading(true);
    try {
      const ress = await fetch(
        "https://65c2f017f7e6ea59682bcaf6.mockapi.io/api/todo"
      );
      if (ress.ok) {
        const data = await ress.json();
        setTodos(data);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      console.log(todos, "todos");
    }
  }, [todos]);

  useEffect(() => {
    console.log("COUNT TELAH BERUBAH MENJADI", count);
  }, [count]);

  return (
    <Suspense fallback={"INI LOADING COMPONENT BUTTON"}>
      <main className="flex p-8 flex-col gap-4">
        {loading == true
          ? "MASIH LOADING....."
          : todos.map((e) => {
              return (
                <ul className="" key={e.id}>
                  <li>
                    Description : <span>{e.description}</span>
                  </li>
                </ul>
              );
            })}

        <button
          onClick={() => {
            setcount(count + 1);
          }}
        >
          ADD COUNT
        </button>
      </main>
    </Suspense>
  );
}
