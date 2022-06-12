import './App.css';
import { useState,useRef } from 'react';

function App() {
  const [input,setInput] = useState('');
  const [todos,setTodos] = useState([]);
  var ref = useRef(null);
  function inputChange(e){
    setInput(e.target.value);
  }
  function addTodo(){
    if(input) setTodos([...todos,input]);
    setInput('');
    ref.current.focus();
  }
  function deleteTodo(e){
    const newTodos = [...todos];
    newTodos.splice(e.target.id,1);
    setTodos([
      ...newTodos
    ])
  }



  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-8 offset-md-2 col-lg-8 offset-lg-2">
          <h1 className='text-center'>Todo</h1>
          <form>
            <div className="row">
              <div className="col">
                <input type="text" className="form-control" onChange={inputChange} ref={ref} value={input} placeholder="Enter todo..." />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className='row mt-2'>
        <div className='text-center col-sm-12 col-md-8 offset-md-2 col-lg-8 offset-lg-2'>
        <button type="button" onClick={addTodo} className="btn btn-outline-primary">Add</button>
        </div>
      </div>
      <div className='row mt-2'>
        <div className='text-center col-sm-12 col-md-8 offset-md-2 col-lg-8 offset-lg-2'>
        <ul className="list-group">
          { todos.map((todo,i)=>{
            return <li key={i} className="list-group-item d-flex justify-content-between align-items-center">{todo} <span id={i} style={{cursor:'pointer'}} onClick={deleteTodo} >X</span></li>
          }) }
        </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
