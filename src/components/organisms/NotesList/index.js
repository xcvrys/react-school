import "./styles.css";
import React, { useState } from "react";
import { allNotes } from "./consts";
import Note from "../../molecules/Note";

const NotesList = () => {

    const [notes, setNotes] = useState(allNotes);
    return (
        <div className="taskList">
            {notes.map((note) => (
                <Note key={note.id} {...note} />
            ))}
        </div>
    );
};

export default NotesList;