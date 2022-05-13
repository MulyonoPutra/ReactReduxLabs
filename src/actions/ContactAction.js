import axios from 'axios';

export const GET_CONTACTS = 'GET_CONTACTS';
export const ADD_CONTACT = 'ADD_CONTACT';

export const findAllContacts = () => {
  return (dispatch) => {
    dispatch({
      type: GET_CONTACTS,
      payload: {
        loading: true,
        data: undefined,
        errorMessages: null,
      },
    });

    axios
      .get('http://localhost:3000/contact')
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: GET_CONTACTS,
          payload: {
            loading: true,
            data: response.data,
            errorMessages: null,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_CONTACTS,
          payload: {
            loading: false,
            data: undefined,
            errorMessages: error.messages,
          },
        });
      });
  };
};


export const addContact = (data) => {
  return (dispatch) => {
    dispatch({
      type: ADD_CONTACT,
      payload: {
        loading: true,
        data: undefined,
        errorMessages: null,
      },
    });

    axios
      .post('http://localhost:3000/contact', data)
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: ADD_CONTACT,
          payload: {
            loading: true,
            data: response.data,
            errorMessages: null,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: ADD_CONTACT,
          payload: {
            loading: false,
            data: undefined,
            errorMessages: error.messages,
          },
        });
      });
  };
};