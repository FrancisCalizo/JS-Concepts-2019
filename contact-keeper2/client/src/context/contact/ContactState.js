import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_ALERT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Connor McGregor',
        type: 'personal',
        email: 'connor@ufc.com',
        phone: '123-456-7890'
      },
      {
        id: 2,
        name: 'Harry White',
        type: 'Personal',
        email: 'harry@yahoo.com',
        phone: '333-333-3333'
      },
      {
        id: 3,
        name: 'Ted Johnsoh',
        type: 'Personal',
        email: 'Ted@gmail.com',
        phone: '222-222-2222'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({
      type: ADD_CONTACT,
      payload: contact
    });
  };
  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
