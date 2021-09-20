import { Input, Button } from 'antd';
import '../css/todoinput.css';
const { TextArea } = Input;
const TodoInput=(props:any):any=>{
    return(
        <>
            <TextArea rows={4} />
            <div className="buttonSubmit">
            <Button type="primary" shape="round">Submit</Button>
            </div>
        </>
    )
}

export default TodoInput