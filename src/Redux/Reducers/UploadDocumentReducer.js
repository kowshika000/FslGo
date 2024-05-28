import {UPLOAD_DOCUMENT_FAILURE, UPLOAD_DOCUMENT_REQUEST, UPLOAD_DOCUMENT_SUCCESS} from '../ActionTypes'
const initialState = {
  error: null,
  loading: false,
};
function UploadDocumentReducer(state = initialState, action) {
  switch (action.type) {
   
    case UPLOAD_DOCUMENT_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case UPLOAD_DOCUMENT_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
      };
    case UPLOAD_DOCUMENT_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    
    default:
      return state;
  }
}
export default UploadDocumentReducer;