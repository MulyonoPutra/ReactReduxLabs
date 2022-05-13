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
    return (
      <div className='card' style={{ width: '24rem' }}>
        <ul className='list-group list-group-flush'>
          {
          getListContactResponse
            ? getListContactResponse.map((contact) => {
                return (
                  <li className='list-group-item' key={contact.id}>
                    {contact.name} - {contact.phone}
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
