import { useState, useEffect } from 'react'
import reactLogo from '/react.svg'
import './App.css'

function App() {
  const [list, setList] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    //Load todos from local storage when the component mounts
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setList(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    //Save todos to local storage when the component updates
    if (newTodo) {
      localStorage.setItem('todos', JSON.stringify(list));
      setNewTodo('');
    }
  }, [list]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim() !== '') {
      setList([...list, newTodo]);
    }
  };

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hands-on Component in React.JS</h1>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <input type='text' value={newTodo} onChange={(event) => setNewTodo(event.target.value)} placeholders="Add new todo"/>
          <button type='submit'>
            Add List
          </button>
        </form>
      </div>
      <div className='cardList'>
        {list.map((item, idx) => {
          return (
            <p key={idx}>
              {item}
            </p>
          )
        })}
      </div>
    </>
  )
}

export default App
