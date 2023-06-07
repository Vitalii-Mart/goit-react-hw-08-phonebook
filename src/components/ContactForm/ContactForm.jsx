import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from './ContactForm.styled';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = evt => {
    if (evt.target.name === 'name') {
      setName(evt.target.value);
    } else if (evt.target.name === 'number') {
      setNumber(evt.target.value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const existingContact = contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    if (!existingContact) {
      dispatch(addContact({ name, number }));
      setName('');
      setNumber('');
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <TextField
          type="text"
          size="small"
          margin="normal"
          label="Name"
          value={name}
          onChange={handleInputChange}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <TextField
          type="tel"
          size="small"
          margin="normal"
          label="Number"
          value={number}
          onChange={handleInputChange}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit" variant="contained" margin="normal">
          Add contact
        </Button>
      </Form>
    </>
  );
}

ContactForm.propTypes = {
  handleInputChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};
