import React, { createContext, useReducer } from 'react';
import { contactReducer } from '../reducers/ContactReducer';
export const ContactUsContext = createContext();
const ContactUsContextProvider = (props) => {
  const [message, dispatch] = useReducer(contactReducer, {
    name: '',
    email: '',
    message: '',
  });
  return (
    <ContactUsContext.Provider value={{ message, dispatch }}>
      {props.children}
    </ContactUsContext.Provider>
  );
};

export default ContactUsContextProvider;
