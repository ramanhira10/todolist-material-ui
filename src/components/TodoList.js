import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import './TodoList.css';

const Main = () => {
    const [item, setItem] = useState("");
    const [newItem, setNewItem] = useState([]);

    const firstEvent = evt => setItem(evt.target.value);

    const secondEvent = () => {
        setNewItem(prev => {
            return [...prev, item];
        });
        setItem("");
    };

    const thirdEvent = () => setNewItem([]);

    return (
        <div>
            <br />
            <br />
            <div class="childOne">
                <input
                    type="text"
                    value={item}
                    placeholder="Add a task"
                    onChange={firstEvent}
                />

                <Button
                    className="AddBtn"
                    onClick={secondEvent}
                >
                    <AddIcon />
                </Button>

                <br />
                <br />

                <ul className="textFont">
                    {
                        newItem.map(val => (<li>{val}</li>))
                    }
                </ul>
            </div>

            <br />
            <br />

            <div className="childTwo">
                <Button
                    className="delBtn"
                    onClick={thirdEvent}
                >
                    <DeleteIcon />Delete All
                </Button>
            </div>
        </div>
    );
};

export default Main;
