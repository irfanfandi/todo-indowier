"use client";

export default function Home() {
  let isLogin = true;
  let nav;

  if (isLogin) {
    nav = <h1>Hi, Admin</h1>;
  } else {
    nav = <button>Login</button>;
  }

  return (
    <main className="flex p-8 flex-col gap-4">
      {nav}
      <div className="">Content</div>
    </main>
  );
}
