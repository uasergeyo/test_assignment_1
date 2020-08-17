import { connect } from 'react-redux';
import CreateNote from '../components/createNote';
import mapStateToProps from '../store/mapStateToProps';
import mapDispatchToProps from '../store/mapDispatchToProps';

const CREATE_NOTE_W = connect(mapStateToProps("CreateNote"), mapDispatchToProps("CreateNote"))(CreateNote);

export default CREATE_NOTE_W;
