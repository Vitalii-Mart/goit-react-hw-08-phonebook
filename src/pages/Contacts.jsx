import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList/';
import Filter from 'components/Filter';

export default function Contacts() {
  const Wrapper = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 40px;
  `;

  return (
    <div>
      <Helmet title="Contacts" />
      <Wrapper>
        <h1>Manage your contacts list</h1>
        <ContactForm />
        <Filter />
        <ContactList />
      </Wrapper>
    </div>
  );
}
