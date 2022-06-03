import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  addContact,
  findAllContacts,
  updateContact,
} from '../actions/ContactAction';

const ContactForm = () => {
  const [id, setId] = useState(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const { addContactResponse, detailContactResponse, updateContactResponse } = useSelector((state) => state.ContactReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updateContact({ id: id, name: name, phone: phone }));
    } else {
      dispatch(addContact({ name: name, phone: phone }));
    }
  };

  useEffect(() => {
    if (addContactResponse) {
      dispatch(findAllContacts());
      setName('');
      setPhone('');
    }
  }, [addContactResponse, dispatch]);

  useEffect(() => {
    if (updateContactResponse) {
      dispatch(findAllContacts());
      setName('');
      setPhone('');
    }
  }, [updateContactResponse, dispatch]);

  useEffect(() => {
    if (detailContactResponse) {
      setName(detailContactResponse.name);
      setPhone(detailContactResponse.phone);
      setId(detailContactResponse.id);
    }
  }, [detailContactResponse, dispatch]);

  return (
    <div>
      <h4>Add Contact</h4>
      <div className='container' style={{ width: '24rem' }}>
        <form
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <input
            className='form-control'
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <br />
          <input
            className='form-control'
            type='text'
            placeholder='Phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></input>
          <br />
          <button type='submit' className='btn btn-primary'>
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
