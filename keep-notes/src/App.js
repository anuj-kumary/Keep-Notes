import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Notes";
import StoreNote from "./StoreNote";


function App() {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) =>{
    //alert("I'm clicked")
    setAddItem((preData)=>{
      return[...preData , note];

    })
  };

const onDelete = (id) =>{
  setAddItem((oldData)=>
    oldData.filter((currData,index)=>{
      return index!==id;
    })
  )
};
  return (
    <>
    < Header />
    <hr className="line" ></hr>
    < Notes 
      passNote = {addNote}
     />
    
    {addItem.map((val,index)=>{
      return( <StoreNote 
        key={index}
        id={index}
        title={val.title}
        content={val.content}
        deleteItems = {onDelete}
      />
       )
    })
    }
    < Footer />
    </>
  );
}

export default App;
