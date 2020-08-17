import { connect } from 'react-redux';
import Note from '../components/note';
import mapStateToProps from '../store/mapStateToProps';
import mapDispatchToProps from '../store/mapDispatchToProps';

const NOTE_W = connect(mapStateToProps("Note"), mapDispatchToProps("Note"))(Note);

export default NOTE_W;
