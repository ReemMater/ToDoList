import React, { useState } from "react";
import ToDoItems from "./todoItems";
import InputArea from "./inputArea";

function App() {

    const [inputText, setInputText] = useState("");
    const [items, setToDoItems] = useState([]);
    const [updatedid, setupdateid] = useState("");
    const [updatedflag, setupdatflag] = useState(false);

    function handleChange(event) {
        const newInput = event.target.value;
        setInputText(newInput);
    }

    function handleClickadd() {
        setToDoItems((prevItems) => {
            return [...prevItems, inputText];
        });
        setInputText("");

    }

    function deleteItem(id) {
        setToDoItems((prevItems) => {
            return prevItems.filter((item, index) => {
                return index !== id;
            })
        })
    }

    function updateItem(id) {
        setInputText(() => {
            return items.filter((item, index) => {
                if (index === id) return item
                else return null
            });

        })
        setupdateid(id);
        setupdatflag(true);

    }

    function handleClickupdate(updatedid) {
        const newTodos = items.filter((t) => t !== updatedid);
        newTodos[updatedid] = inputText;
        setToDoItems(newTodos);
        setupdatflag(false);
        setInputText("");
    }


    return ( < div className = "container" >
            <
            div className = "heading" >
            <
            h1 > To - Do List < /h1> <
            /div> <
            div className = "form" >
            <
            InputArea Changed = { handleChange }
            Text = { inputText }
            ClickAdd = { handleClickadd }
            ClickUpdate = {
                () => handleClickupdate((updatedid)) }
            flag = { updatedflag }
            /> <
            /div> <
            div >
            <
            ul > {
                items.map((item, index) => < ToDoItems key = { index }
                    id = { index }
                    text = { item }
                    clickDelete = { deleteItem }
                    clickUpdate = { updateItem }
                    /> )} <
                    /ul> <
                    /div> <
                    /div>
                );
            }

            export default App;