import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MAIN_PAGE_W from '../wrappers/mainPageWrapper'
import CREATE_NOTE_W from '../wrappers/createNote_w'
import EDIT_NOTE_W from '../wrappers/editNote_w'
import NOT_FOUND_W from '../wrappers/notFound_w'

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/edit-note/:id" component={EDIT_NOTE_W} exact />
                <Route path="/create-note" component={CREATE_NOTE_W} exact />
                <Route path="/" component={MAIN_PAGE_W} exact />
                <Route component={NOT_FOUND_W} />
            </Switch>
        )
    }
}

export default Routes;