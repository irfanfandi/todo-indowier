"use client";

import Button from "@/components/Button";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <div className="flex justify-between items-center">
        <h6 className="text-xl font-bold">Todo List</h6>
        <Button title="Add Task" />
      </div>
      <section className="container mt-4">
        <div className="bg-white w-full p-4 rounded-xl">
          <h6 className="text-gray-500">Task</h6>
        </div>
      </section>
    </Fragment>
  );
}
