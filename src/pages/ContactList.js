import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { deleteContact, findAllContacts } from '../actions/ContactAction';

const ContactList = () => {
  const {
    getListContactResponse,
    getContactLoading,
    getContactError,
    deleteContactResponse,
  } = useSelector((state) => state.ContactReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(findAllContacts());
  }, [dispatch]);

  useEffect(() => {
    if (deleteContactResponse) {
      dispatch(findAllContacts());
    }
  }, [deleteContactResponse, dispatch]);

  const onRenderContacts = () => {
    return (
      <div className='card' style={{ width: '34rem' }}>
        <ul className='list-group list-group-flush'>
          {getListContactResponse
            ? getListContactResponse.map((contact) => {
                return (
                  <li className='list-group-item text-start' key={contact.id}>
                    <strong>{contact.name}</strong> - {contact.phone}
                    <div className='position-absolute top-0 end-0'>
                      <button className='btn btn-warning'>Edit</button> &nbsp;
                      <button
                        className='btn btn-danger'
                        // @ts-ignore
                        onClick={() => dispatch(deleteContact(contact.id))}
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                );
              })
            : onLoading()}
        </ul>
      </div>
    );
  };

  const onLoading = () => {
    return getContactLoading ? 'Loading...' : '';
  };

  return (
    <div>
      <h2>List Contact</h2>
      <div className='container d-flex justify-content-center'>
        {onRenderContacts()}
      </div>
    </div>
  );
};

export default ContactList;
