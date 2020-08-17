import { connect } from 'react-redux';
import App from '../App.js';
import mapStateToProps from '../store/mapStateToProps';
import mapDispatchToProps from '../store/mapDispatchToProps';

const APP_W = connect(mapStateToProps("App"), mapDispatchToProps(null))(App);

export default APP_W;