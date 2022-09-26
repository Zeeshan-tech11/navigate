import Login from "./components/Login";
import Todo from "./components/Todo";
import Settings from "./components/Settings";
// import authContext from './components/Context';
import{BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
function App() {
  return (
    // <authContext.Provider value={isAuth}>
    <Router>
      <Routes>
      <Route path='/' element={<Login/>}  />
      <Route path='/todo' element={<Todo/>} />
      <Route path='/settings' element={<Settings user={'admin'}/>} />

      </Routes>
      </Router>
      // </authContext.Provider>
  );
}
export default App;
