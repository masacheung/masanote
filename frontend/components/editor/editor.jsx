import React from "react";

class Editor extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: null,
            title: "",
            body: ""
        }
    }

    update(field) {
        return e => {
            this.setState({[field]: e.currentTarget.value}, () => {this.props.updateNote(this.state)})
        }
    }

    componentDidUpdate(prevProps){
        if(this.props.noteId !== prevProps.noteId) {
            this.setState(this.props.note);
        }
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Title" value={this.state.title} onChange={this.update("title")}/>
            </div>
        )
    }
}

export default Editor;