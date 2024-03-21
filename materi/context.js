"use client";

import React, { useContext, useState } from "react";

// Buat konteks
const MyContext = React.createContext();

// Gunakan useContext di dalam komponen
function ButtonAdd() {
  const { count, setCount } = useContext(MyContext);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Button Add
      </button>
    </div>
  );
}

function View() {
  const { count, setCount } = useContext(MyContext);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

// Gunakan Provider untuk menyediakan nilai konteks
export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <MyContext.Provider value={{ count, setCount }}>
      <main className="flex p-8 flex-col gap-4">
        <View />
        <ButtonAdd />
      </main>
    </MyContext.Provider>
  );
}
