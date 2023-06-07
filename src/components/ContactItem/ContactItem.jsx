import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';
import { Item, Text } from './ContactItem.styled';

const ContactItem = ({ filteredContacts }) => {
  const dispatch = useDispatch();
  return (
    <>
      {filteredContacts?.map(({ id, name, number }) => (
        <Item key={id}>
          <Text>
            {name}: {number}
          </Text>
          <IconButton
            aria-label="delete"
            onClick={() => dispatch(deleteContact(id))}
            color="primary"
          >
            <DeleteIcon />
          </IconButton>
        </Item>
      ))}
    </>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  onClick: PropTypes.func,
  filteredContacts: PropTypes.array,
};
