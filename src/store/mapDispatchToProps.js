import { bindActionCreators } from 'redux';
import { 
	actionGetAllNotes, 
	actionRemoveNote,
	actionGetOneNote,
	actionEditNote,
	actionCreateNote,
	actionLocation,

		
		} from './actionCreators';

function mapDispatchToProps(component) {
	switch (component) {
		case "MainPage": return function (dispatch) {
			return {
				onGetAllNotes: bindActionCreators(actionGetAllNotes, dispatch),
				onGetLocation: bindActionCreators(actionLocation,dispatch)
			};
		};

		case "Note": return function (dispatch) {
			return {
				onRemoveNote: bindActionCreators(actionRemoveNote,dispatch)
			}
		}

		case "EditNote": return function (dispatch) {
			return {
				onGetOneNote: bindActionCreators(actionGetOneNote,dispatch),
				onEditNote: bindActionCreators(actionEditNote,dispatch),
				onGetAllNotes: bindActionCreators(actionGetAllNotes, dispatch),
				onGetLocation: bindActionCreators(actionLocation,dispatch)
			}
		}

		case "CreateNote": return function (dispatch) {
			return {
				onCreateNote: bindActionCreators(actionCreateNote,dispatch),
				onGetLocation: bindActionCreators(actionLocation,dispatch)
			}
		}

		case "NotFound":return function (dispatch) {
			return {
				onGetLocation: bindActionCreators(actionLocation,dispatch)
			}
		}
		
		default: return undefined;
	}
}

export default mapDispatchToProps;