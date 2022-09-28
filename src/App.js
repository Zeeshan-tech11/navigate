import Login from "./components/Login";
import Todo from "./components/Todo";
import Settings from "./components/Settings";
import UserTodo from "./components/UserTodo";
import TodoList from "./components/TodoList";
import{BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import authContext from './components/Context'
import { useState } from "react";

function App() {
    let [isAuth,setAuth]=useState(false)
    const handleLogin=(value)=>{
      setAuth(value)
      authContext._currentValue=value
    }
  return (
    <authContext.Provider value={isAuth}>
    <Router>
      <Routes>
      <Route path='/' element={<Login handleLogin={handleLogin}/>}  />
      {authContext._currentValue?<Route path='/todo' element={<Todo />} >
      <Route index element={<TodoList />} />
      <Route path='/todo/:id' element={<UserTodo />}/>        
      </Route>:""}
      {authContext._currentValue?<Route path='/settings' element={<Settings  user={'admin'}/>}/>:""}
      </Routes>
      </Router>
      </authContext.Provider>
  );
}
export default App;
