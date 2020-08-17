import React from 'react';
import NOTE_W from '../wrappers/note_w';
import Loader from './loader';
import { withTranslation } from "react-i18next";


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: ''
        }
    }

    componentDidMount() {
        this.props.onGetLocation(this.props.history.location.pathname)
        this.props.onGetAllNotes()
            .then(() => this.setState({ notes: this.props.notes }))

    }

    addNewNoteHandler = () => {
        this.props.history.push('/create-note')
    }

    render() {
        const { t } = this.props;

        if (this.state.notes) {
            return (
                <div className="notesHolder">
                    {
                        this.state.notes.length ? this.state.notes.map(i => <NOTE_W note={i}
                            t={this.props.t}
                            key={i.id}
                            history={this.props.history} />) : <div>
                                <p>{t("warnings.note")}</p>
                                <button onClick={this.addNewNoteHandler}>{t('buttons.createNote')}</button>
                            </div>
                    }
                </div>
            )
        } else {
            return <Loader />
        }
    }
}

const MainPage = withTranslation('common')(Main)

export default MainPage;