import { GET_CONTACTS } from '../../actions/ContactAction';

const initialState = {
  getListContactResponse: undefined,
  getContactLoading: false,
  getContactError: false,
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
    default:
      return state;
  }
};

export default contactReducer;
