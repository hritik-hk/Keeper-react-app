import React from "react";
import Footer from "./Footer";
import Note from "./Note";
import Header from "./Header";
import notes from "../notes";

function App(){
  
    return (
        <div>
          <Header />
           {notes.map(notesItem =>
            <Note
               key={notesItem.key}
               title={notesItem.title}
               content={notesItem.content}
             />)}
          <Footer />
        </div>
    );
}

export default App;