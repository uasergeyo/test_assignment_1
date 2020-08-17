import React from 'react';
import { withTranslation } from "react-i18next";

class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            warning: false,
        }
    }

    componentDidMount() {
        this.props.onGetLocation(this.props.history.location.pathname)
        this.props.onGetOneNote(this.props.match.params.id)
            .then(() => this.setState({
                title: this.props.title,
                description: this.props.description
            }))
    }

    editTitleHandler = (e) => {
        this.setState({ title: e.target.value })
    }

    editDescriptionHandler = (e) => {
        this.setState({ description: e.target.value })
    }

    saveChangesHandler = () => {
        if (this.state.title.length && this.state.description.length) {
            this.props.onEditNote({
                title: this.state.title,
                description: this.state.description,
                id: this.props.match.params.id
            }).then((res) => res ? this.props.history.push('/') : null)
        } else {
            this.setState({ warning: true })
        }
    }

    render() {
        const { t } = this.props;
        return (
            <div className="oneNoteHolder">
                <p className="inputWarning">{this.state.warning ? t("warnings.edit") : null}</p>
                <p>{t("note.title")}</p>
                <input onChange={this.editTitleHandler} value={this.state.title} type="text" />
                <p>{t("note.desc")}</p>
                <textarea onChange={this.editDescriptionHandler} value={this.state.description} />
                <span>
                    <button onClick={this.saveChangesHandler}>{t("buttons.saveChanges")}</button>
                </span>
            </div>
        )
    }
}

const EditNote = withTranslation('common')(Edit)

export default EditNote