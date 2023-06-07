export const selectContacts = state => state.contactsReducer.items;

export const selectIsLoading = state => state.isLoading;

export const selectError = state => state.contactsReducer.error;

export const selectFilterValue = state => state.contactsReducer.filter;