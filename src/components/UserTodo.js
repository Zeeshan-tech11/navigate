import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
export default function UserTodo(props) {
  let navigator = useNavigate();
  
  let [todo, setTodo] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => res.json())
      .then((list) => {
        console.log(list);
        setTodo(list);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div className="task">
      <div className="left">
        <img
          alt="hey"
          src="https://thumbs.dreamstime.com/z/young-smiling-woman-multi-tasking-using-modern-device-time-happy-relaxing-girl-character-engaged-task-management-vector-166563851.jpg"
        />
      </div>
      <div className="right taskdetails">
        <div>
          <div> Task:</div>
          <div className="title">{todo.title}</div>
          <div>
            <div>
              ID: <span> {todo.id}</span>
            </div>
            <div>
              Status: <span>{todo.completed ? "Done" : "Pending"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
