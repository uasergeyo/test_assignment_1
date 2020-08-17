import React from 'react'

class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDescriptionVisible: false,
            isDisabled: false,
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.removedNoteUrl !== this.props.removedNoteUrl &&
            +this.props.removedNoteStatus === 204 && this.props.removedNoteUrl.slice(-9) === this.props.note.id) {
            this.setState({ isDisabled: true })
        }

    }

    editNoteHandler = (id) => {
        this.props.history.push(`/edit-note/${id}`)
    }

    removeNoteHandler = (id) => {
        this.props.onRemoveNote(id)
    }

    render() {
        return (
            <div className={this.state.isDisabled ? "disabledNote" : "note"}>
                <h3 className="noteHeader" onClick={() => this.setState({ isDescriptionVisible: true })}>{this.state.isDisabled ? this.props.t(('links.removed')) : this.props.note.title}</h3>
                {
                    this.state.isDescriptionVisible ? <div className="noteBody">
                        <p>{this.state.isDisabled ? null : this.props.note.description}</p>
                    </div> : null
                }
                {this.state.isDisabled ? null : <div className="noteMenu">
                    <p onClick={() => this.setState({ isDescriptionVisible: !this.state.isDescriptionVisible })}>
                        {this.state.isDescriptionVisible ? this.props.t('links.hideDesc') : this.props.t('links.watchDesc')}</p>
                    <p onClick={() => this.editNoteHandler(this.props.note.id)}>{this.props.t('links.edit')}</p>
                    <p onClick={() => this.removeNoteHandler(this.props.note.id)}>{this.props.t('links.delete')}</p>
                    <span className="noteCreatedStamp">{this.props.t("noteWasCreated",
                    {date:`${new Date(this.props.note.createdAt || this.props.note.updatedAt).getDate()}
                       ${(new Date(this.props.note.createdAt || this.props.note.updatedAt).getMonth() + 1)} 
                       ${new Date(this.props.note.createdAt || this.props.note.updatedAt).getFullYear()}`})
                }</span>
                </div>}
            </div>
        )
    }
}

export default Note;