import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contacts/contactsSlice';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import { Box, Label, Text } from './Filter.styled';

export default function Filter() {
  const dispatch = useDispatch();

  return (
    <Box>
      <Label htmlFor="find">
        <Text>Find contacts by name</Text>
      </Label>
      <TextField
        fullWidth
        label="search"
        size="small"
        margin="dense"
        type="text"
        onChange={e => dispatch(filterContact(e.target.value.toLowerCase()))}
      />
    </Box>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func,
};
