import ContactForm from './Components/ContactForm';
import Contacts from './Components/ContactList';

export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Contacts />
    </div>
  );
}
