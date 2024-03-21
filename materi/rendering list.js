"use client";

export default function Home() {
  const users = [
    { nama: "Budi", alamat: "Surabaya" },
    { nama: "Andi", alamat: "Surabaya" },
  ];

  return (
    <main className="flex p-8 flex-col gap-4">
      {users.map((e, id) => {
        return (
          <div key={id}>
            <ul>
              <li>
                Nama : <span>{e.nama}</span>
              </li>
              <li>
                Alamat : <span>{e.alamat}</span>
              </li>
            </ul>
          </div>
        );
      })}
    </main>
  );
}
