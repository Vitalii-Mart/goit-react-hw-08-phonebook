import React, { useEffect } from 'react';
import { List, Total } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectContacts, selectFilterValue } from 'redux/contacts/selectors';
import ContactItem from 'components/ContactItem/ContactItem';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const filter = useSelector(selectFilterValue);
  const filteredContacts = contacts?.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List>
      <Total>Total contacts: {filteredContacts?.length}</Total>
      <ContactItem filteredContacts={filteredContacts} />
    </List>
  );
}
