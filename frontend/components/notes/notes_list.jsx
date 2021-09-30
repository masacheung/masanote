import React from "react";
import { Link } from "react-router-dom";
import NoteItem from "./note_item";

class NotesList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchNotes();
    }

    render() {
        // const notes = this.props.notes.reverse()
        return(
            <ul>
                {/* {notes.map(note => <NoteItem note={note} key={note.id} />)} */}
                {this.props.notes.map(note => <NoteItem note={note} key={note.id} />)}
            </ul>
        )
    }
}

export default NotesList;