import React from 'react';
import {withTranslation} from "react-i18next";

class Not_found extends React.Component {
    componentDidMount(){
        this.props.onGetLocation(this.props.history.location.pathname)
    }
    render(){
        const { t } = this.props;
        return (
            <div className="notFoundPage">
               <h2>{t("warnings.notFound")}</h2>
            </div>
        )
    }
}

const NotFound = withTranslation('common')(Not_found)

export default NotFound;