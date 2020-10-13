import React, { useState } from "react";

function ToDoItems(props) {

    const [isDone, isDoneHandling] = useState(false);

    function clickHandle() {
        isDoneHandling((prev) => !prev)
    }

    return ( <
        div className = "listItem" >
        <
        div onClick = { clickHandle }
        className = "col1" >
        <
        li style = {
            { textDecoration: isDone ? "line-through" : null, cursor: "pointer" } } > { props.text } < /li> <
        /div> <
        div className = "col2" >
        <
        button onClick = {
            () => { props.clickDelete(props.id); } }
        className = "button2" > Delete < /button> <
        /div> <
        div className = "col2" >
        <
        button onClick = {
            () => { props.clickUpdate(props.id); } }
        className = "button2" > Update < /button> <
        /div> <
        /div>
    );
}

export default ToDoItems;