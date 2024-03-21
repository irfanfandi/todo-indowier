"use client";

import Button from "@/components/Button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

export default function Home() {
  const [dataTodos, setdataTodos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const route = useRouter();

  const getData = async () => {
    try {
      const ress = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/todo`);
      if (ress.ok) {
        const data = await ress.json();
        setdataTodos(data);
      }
    } catch (error) {}
  };

  const handleSignOut = async () => {
    await signOut();
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const target = e.target;
    const description = target.description.value;
    console.log(description);

    try {
      const ress = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/todo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description: description }),
      });
      if (ress.ok) {
        alert("SIMPAN DATA SUKSES");
        getData();
        setShowModal(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Fragment>
      <div className="flex justify-between items-center">
        <h6 className="text-xl font-bold"> Task List</h6>
        <div className="space-x-2">
          <Button
            color={"bg-purple-500"}
            title={"Add Task"}
            onClick={() => {
              setShowModal(true);
            }}
          />
          <Button
            color={"bg-purple-500"}
            title={"Logout"}
            onClick={() => {
              handleSignOut();
            }}
          />
        </div>
      </div>
      <section className="container mt-4">
        {dataTodos
          .sort((a, b) => b.id - a.id)
          .map((value) => {
            return (
              <div
                onClick={() => {
                  route.push("/detailtodo");
                }}
                key={value.id}
                className="flex mt-2 justify-between items-center bg-white w-full p-4 rounded-xl"
              >
                <div>
                  <h6 className="text-gray-500">Task</h6>
                  <p>{value.description}</p>
                </div>
                <div className="space-x-2">
                  <Button color={"bg-gray-500"} title={"Edit"} />
                  <Button color={"bg-red-500"} title={"Hapus"} />
                </div>
              </div>
            );
          })}
      </section>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Add Task</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form
                    id="form-todo"
                    className="space-y-6 relative py-6 mx-auto flex-auto"
                    onSubmit={handleSubmit}
                  >
                    <input
                      id="description"
                      className="w-full border border-solid border-[#919EAB52] px-2 pb-2 pt-4 rounded-lg  placeholder:text-[#919EAB]"
                      placeholder="description"
                    />
                  </form>
                  <div className="flex-col items-center justify-center space-y-4 mt-6">
                    <Button
                      form="form-todo"
                      color={"bg-purple-500 w-full"}
                      title={"Simpan"}
                      type="submit"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </Fragment>
  );
}
