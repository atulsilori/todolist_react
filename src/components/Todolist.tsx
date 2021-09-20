import TodoInput from './Todoinput'
import TodoResult from './Todoresult'
import { Divider } from 'antd';
import '../css/todolist.css'
import 'antd/dist/antd.css';
const TodoList=(props:any):any=>{
    return(
        <>
        <div className="TodoList">
            <h2>Todo List in react</h2>
            <Divider/>
            <TodoInput/>
            <Divider/>
            <TodoResult/>
        </div>
        </>
    )
}
export default TodoList;