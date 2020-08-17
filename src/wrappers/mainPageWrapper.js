import { connect } from 'react-redux';
import MainPage from '../components/mainPage';
import mapStateToProps from '../store/mapStateToProps';
import mapDispatchToProps from '../store/mapDispatchToProps';

const MAIN_PAGE_W = connect(mapStateToProps("MainPage"), mapDispatchToProps("MainPage"))(MainPage);

export default MAIN_PAGE_W;
