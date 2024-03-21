"use client";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const getData = async () => {
    try {
      const ress = await fetch(
        "https://65c2f017f7e6ea59682bcaf6.mockapi.io/api/todo"
      );
      if (ress.ok) {
        const data = await ress.json();
        setTodos(data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="flex p-8 flex-col gap-4">
      {todos.map((e) => {
        return (
          <ul className="" key={e.id}>
            <li>
              Description : <span>{e.description}</span>
            </li>
          </ul>
        );
      })}
    </main>
  );
}
