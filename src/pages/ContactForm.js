import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, findAllContacts } from '../actions/ContactAction';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  // @ts-ignore
  const { addContactResponse } = useSelector((state) => state.ContactReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    // @ts-ignore
    dispatch(addContact({ name: name, phone: phone }));
  };

  useEffect(() => {
    if (addContactResponse) {
      // @ts-ignore
      dispatch(findAllContacts());
      setName('');
      setPhone('');
    }
  }, [addContactResponse, dispatch]);

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
