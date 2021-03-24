import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';

function Notes (props){

    const [expand , setExpand] = useState(false);
    const [note , setNote] = useState({
        title : "",
        content: "",

    });
    const inputEvent = (event) =>{

        const {name ,value} = event.target;
        setNote((preData) =>{
            return{
                ...preData,
                [name]:value,
            };
        });
    }

    const addEvent = () =>{
        props.passNote(note);
        setNote({
            title : "",
            content: "",
        });
    };

    const expandIt = () =>{
        setExpand(true);
    }
    const shrinkEvent = () =>{
        setExpand(false);
    }
    return(
        <>
         <div className="container">
         <form>

         {expand?
            <input 
            onChange={inputEvent}
            type="text" 
            placeholder="Enter a Title"
            value={note.title}
            name="title"
            >
            </input> : null}

            <textarea 
            onChange={inputEvent}
            rows="" 
            cols="" 
            value={note.content}
            name="content"
            placeholder="Enter a Notes" 
            autoComplete="off"
            onClick={expandIt}
            onDoubleClick={shrinkEvent}
            >
            </textarea>

            {expand?
            <Button 
            onClick={addEvent} 
            className="btn">
            <AddIcon className="add" /> 
            </Button> :null
            }
            
            </form>
         </div>
        </>
    )
}
export default Notes;