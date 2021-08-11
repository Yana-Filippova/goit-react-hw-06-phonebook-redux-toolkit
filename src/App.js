import { useSelector } from 'react-redux';
import { getContacts } from './redux/selectors';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Container from './components/Container';
import './App.css';

export default function App() {
  const contacts = useSelector(getContacts);

  const contactsLength = contacts.length;

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contactsLength > 1 && <Filter />}

      {contactsLength > 0 ? (
        <ContactList />
      ) : (
        <p>Currently your phonebook has no contacts. Please add them.</p>
      )}
    </Container>
  );
}
