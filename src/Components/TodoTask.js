import React from "react";
import { Checkbox, Divider } from 'antd';

function TodoTask (props) {
    const completedStyle = {fontStyle: "italic", textDecoration: "line-through"}
    return (
            <div>
                <Checkbox
                    checked={props.task.completed}
                    onChange={() => props.handleChange(props.task.id)}
                /> 
                <p style={props.task.completed ? completedStyle : null}>{props.task.text}</p>
                <Divider/>
            </div>
    );
}

export default TodoTask