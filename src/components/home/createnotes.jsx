import React from "react";
import Banner from "./banner";
import Option from "./option";
import { useState } from "react";
import { ingresoBaseDatos } from "../../firebaseConfi";
import Optionbar from "./optionbar";
import AddLabel from "./addlabel";




const CreateNotes = () => {
  
  const [value, setValue] = useState("");
  console.log(value);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
    const date = new Date();
    ingresoBaseDatos("notas", {
      title: event.target.title.value,
      label: value,
      status: true,
      description: value,
      date: date.toLocaleDateString(),
      creator: localStorage.getItem("myid")
    }).then((doc) => {
      console.log(doc.id);
    })
  };
 
  return (
    <section className="container-banner">
      <Banner />
      <div className="optionForm">
        <Option />
      <form onSubmit={handleSubmit} className="form CreateNotes">
        <input className="titleNote"  id="title" type="text" placeholder="Enter title"></input>
        <AddLabel/>
              <textarea
                    type="text"
                    placeholder=" Type to add a note..."
                    className="notesCreate"
                    rows="8"
                    cols="10"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
               />
             <div className="footerNote">
                   <small>200 Remaining</small>
                  <button  type="submit"  className="btn-submit">save</button> 
                  <Optionbar/> 
             </div>
         </form>
         </div>
     </section>
  );
};

export default CreateNotes;


