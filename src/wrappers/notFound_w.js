import { connect } from 'react-redux';
import NotFound from '../components/notFound';
import mapStateToProps from '../store/mapStateToProps';
import mapDispatchToProps from '../store/mapDispatchToProps';

const NOT_FOUND_W = connect(mapStateToProps("NotFound"), mapDispatchToProps("NotFound"))(NotFound);

export default NOT_FOUND_W;