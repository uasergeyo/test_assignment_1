import { d } from '../helpers'

function mapStateToProps(component) {
	switch (component) {
		case "MainPage":
			return function (state) {
				return {
					notes: d`${state}.promiseReducer.allNotes.payload`,
				}
			}

		case "Note":
			return function (state) {
				return {
					removedNoteStatus: d`${state}.promiseReducer.removeNote.payload.status`,
					removedNoteUrl: d`${state}.promiseReducer.removeNote.payload.url`,
				}
			}

		case "EditNote":
			return function (state) {
				return {
					title: d`${state}.promiseReducer.oneNote.payload.title`,
					description: d`${state}.promiseReducer.oneNote.payload.description`
				}
			}

		// case "CreateNote":
		// 	return function (state) {
		// 		return {
		// 			responseOnCreate: d`${state}.promiseReducer.createNote.payload.id`,
		// 		}
		// 	}

		case "App":
			return function (state) {
				return {
					location : d`${state}.locationReducer.location`,
				}
			}

		default: return undefined;
	}
}

export default mapStateToProps;