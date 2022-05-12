import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findAllContacts } from '../actions/ContactAction';

const ContactList = () => {
  // @ts-ignore
  const { getListContactResponse, getContactLoading, getContactError } = useSelector((state) => state.ContactReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(findAllContacts());
  }, [dispatch]);

  const onRenderContacts = () => {
    return getListContactResponse
      ? getListContactResponse.map((contact) => {
          return (
            <div key={contact.id}>
              <h1>{contact.name}</h1>
              <h2>{contact.phone}</h2>
            </div>
          );
        })
      : onLoading();
  };

  const onLoading = () => {
    return getContactLoading ? 'Loading...' : '';
  };

  return (
    <div>
      <h2>List Contact</h2>
      { onRenderContacts() }
    </div>
  );
};

export default ContactList;
