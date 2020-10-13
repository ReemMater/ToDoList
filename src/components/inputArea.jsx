import React from "react";

function InputArea(props) {
    return ( <
        div >
        <
        input onChange = { props.Changed }
        type = "text"
        value = { props.Text }
        /> <
        button onClick = { props.ClickAdd }
        className = "button1" > < span > Add < /span></button >
        <
        button onClick = { props.ClickUpdate }
        className = "button1"
        style = {
            { display: props.flag ? "inline" : "none" } } > < span > update < /span></button >
        <
        /div>
    );
}

export default InputArea;