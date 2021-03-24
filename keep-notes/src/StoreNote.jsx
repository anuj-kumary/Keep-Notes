import React from "react";
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function StoreNote(props) {

    const deleteNote = () =>{
        props.deleteItems(props.id);
    }
    return(
        <>
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <Button className="btn1" onClick={deleteNote}>
                <DeleteForeverIcon className="deleteIcon"/>
            </Button>

        </div>
        </>
    )
}
export default StoreNote;