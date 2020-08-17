import { connect } from 'react-redux';
import EditNote from '../components/editNote';
import mapStateToProps from '../store/mapStateToProps';
import mapDispatchToProps from '../store/mapDispatchToProps';

const EDIT_NOTE_W = connect(mapStateToProps("EditNote"), mapDispatchToProps("EditNote"))(EditNote);

export default EDIT_NOTE_W;
