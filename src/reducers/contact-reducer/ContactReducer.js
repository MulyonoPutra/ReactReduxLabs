import {
  ADD_CONTACT,
  DELETE_CONTACT,
  GET_CONTACTS,
  DETAILS_CONTACT,
  UPDATE_CONTACT,
} from '../../actions/ContactAction';

const initialState = {
  getListContactResponse: undefined,
  getContactLoading: false,
  getContactError: false,

  addContactResponse: undefined,
  addContactLoading: false,
  addContactError: false,

  deleteContactResponse: undefined,
  deleteContactLoading: false,
  deleteContactError: false,

  detailContactResponse: undefined,

  updateContactResponse: undefined,
  updateContactLoading: false,
  updateContactError: false,
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        getListContactResponse: action.payload.data,
        getContactLoading: action.payload.loading,
        getContactError: action.payload.errorMessages,
      };
    case ADD_CONTACT:
      return {
        ...state,
        addContactResponse: action.payload.data,
        addContactLoading: action.payload.loading,
        addContactError: action.payload.errorMessages,
      };
    case DELETE_CONTACT:
      return {
        ...state,
        deleteContactResponse: action.payload.data,
        deleteContactLoading: action.payload.loading,
        deleteContactError: action.payload.errorMessages,
      };
    case DETAILS_CONTACT:
      return {
        ...state,
        detailContactResponse: action.payload.data,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        updateContactResponse: action.payload.data,
        updateContactLoading: action.payload.loading,
        updateContactError: action.payload.errorMessages,
      };
    default:
      return state;
  }
};

export default contactReducer;
