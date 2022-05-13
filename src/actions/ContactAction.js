import axios from 'axios';

export const GET_CONTACTS = 'GET_CONTACTS';
export const ADD_CONTACT = 'ADD_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const DETAILS_CONTACT = 'DETAILS_CONTACT';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';

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

export const deleteContact = (id) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_CONTACT,
      payload: {
        loading: true,
        data: undefined,
        errorMessages: null,
      },
    });

    axios
      .delete('http://localhost:3000/contact/' + id)
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: DELETE_CONTACT,
          payload: {
            loading: true,
            data: response.data,
            errorMessages: null,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: DELETE_CONTACT,
          payload: {
            loading: false,
            data: undefined,
            errorMessages: error.messages,
          },
        });
      });
  };
};

export const detailContact = (data) => {
  return (dispatch) => {
    dispatch({
      type: DETAILS_CONTACT,
      payload: {
        data: data,
      },
    });
  };
};

export const updateContact = (data) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: {
        loading: true,
        data: undefined,
        errorMessages: null,
      },
    });

    axios
      .put('http://localhost:3000/contact/' + data.id, data)
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: UPDATE_CONTACT,
          payload: {
            loading: true,
            data: response.data,
            errorMessages: null,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_CONTACT,
          payload: {
            loading: false,
            data: undefined,
            errorMessages: error.messages,
          },
        });
      });
  };
};
