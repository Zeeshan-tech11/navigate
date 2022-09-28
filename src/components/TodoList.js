import React,{useState,useEffect} from 'react'
import {useNavigate} from "react-router-dom";

function TodoList(props) {
    let navigator = useNavigate();
    let [todoList, setTodoList] = useState([]);
    useEffect(() => {
        let url='https://jsonplaceholder.typicode.com/todos'
        fetch(url)
          .then((res) => res.json())
          .then((list) => {
            return list.slice(0, 10);
          })
          .then((list) => {
            setTodoList(list);
          })
          .catch((err) => console.log(err));
      }, []);
  return (
    <div>
        <table>
        <tr>
          <th>No</th>
          <th>Todos</th>
          <th>Status</th>
        </tr>
        {todoList.map((list) => (
          
          <tr onClick={()=>{ navigator(`/todo/${list.id}`)
        }} key={list.id}>
            <td>{list.id}</td>
            
            <td >{list.title}</td>
            <td>
              {list["completed"] ? (
                <img
                  style={{ width: 25 }}
                  src="https://cdn-icons-png.flaticon.com/512/5290/5290081.png"
                  alt="done"
                ></img>
              ) : (
                <img
                  style={{ width: 25 }}
                  alt="undoe"
                  src="https://cdn.vectorstock.com/i/1000x1000/39/33/sand-hourglass-for-time-countdown-icon-vector-42843933.webp"
                ></img>
              )}
            </td>
          </tr>
        
        ))}
      </table>

    </div>
  )
}

export default TodoList