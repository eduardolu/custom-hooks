
import { useEffect } from 'react';
import { useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

export const useTodo = () => {

    const initialState= [];
    const init =()=>{
        return JSON.parse(localStorage.getItem('todos')) || []
    }
    const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init )

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos) || [])
    }, [todos])

    const handleNewTodo = (todo)=>{
        const action = {
            type:'[TODO] add Todo',
            payload: todo
        }
        dispatchTodo(action);
    }

    const handleDeleteTodo = (id) => {
        dispatchTodo({
            type:'[TODO] delete item',
            payload: id
        })
    }
    
    const handleToggleTodo = (id) => {
        dispatchTodo({
            type:'[TODO] toggle todo',
            payload: id
        })
    }

  return {
    todos,
    todosLength: todos.length,
    pendienteLength:todos.filter(todo=>(!todo.done)).length ,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo
  }
}
