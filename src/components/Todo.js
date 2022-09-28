import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import authContext from "./Context";
export default function Todo(props) {
  let navigator = useNavigate();
  console.log(authContext._currentValue,'todooo');
  let [searchParams, setSearchParams] = useSearchParams();
  let id = searchParams.get("id");
  //check if search param
  
  useEffect(() => {
    if(id)
    navigator(`/todo/${id}`)
  }, [id])
  //take userInput for todo
  let [todoId, setTodoId] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigator(`/todo/${todoId}`);
  };
  return (
    <div>
      <Navbar />
      <div className="input-box">
        <input
          value={todoId}
          onChange={(e) => setTodoId(e.target.value)}
          type="text"
        />
        <button onClick={(e) => handleSubmit(e)}>Type ID to get Todo</button>
      </div>
      {/* display todoList */}
      <Outlet />
    </div>
  );
}
