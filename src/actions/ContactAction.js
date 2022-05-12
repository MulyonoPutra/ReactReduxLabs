import axios from 'axios';

export const GET_CONTACTS = 'GET_CONTACTS';

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
