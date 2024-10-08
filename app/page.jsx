import Image from "next/image";
// page.jsx
import TodoInput from "./components/TodoInput";
import TodoList from "./components/ToDoList";

export default function Page() {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}
