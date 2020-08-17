import React from 'react'
import {withTranslation} from "react-i18next";

class Create extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title:"",
            description:"",
            warning:false
        }
    }
    componentDidMount(){
        this.props.onGetLocation(this.props.history.location.pathname)
    }


    inputTitleHandler=(e)=>{
        this.setState({title:e.target.value})
    }

    inputDescriptionHandler=(e)=>{
        this.setState({description:e.target.value})
    }

    createButtonHandler=()=>{
        if(this.state.title.length && this.state.description.length){
            this.props.onCreateNote({
                title:this.state.title,
                description:this.state.description
            }).then(res=>res.id?this.props.history.push('/'):null)
        }else{
            this.setState({warning:true})
        }
    }

    render(){
        const { t } = this.props;
        return(
            <div className="oneNoteHolder">
                <p className="inputWarning">{this.state.warning ? t("warnings.edit") : null}</p>
                <p>{t("note.title")}</p>
                <input onChange={this.inputTitleHandler} value={this.state.title} type="text"/>
                <p>{t("note.desc")}</p>
                <textarea onChange={this.inputDescriptionHandler} value={this.state.description}/>
                <span>
                <button onClick={this.createButtonHandler} >{t("buttons.create")}</button>
                </span>
            </div>
        )
    }
}

const CreateNote = withTranslation('common')(Create)

export default CreateNote