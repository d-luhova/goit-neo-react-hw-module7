import styles from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, selectContacts } from '../../redux/contactsSlice';
import { selectFilter } from '../../redux/filtersSlice';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.contactList}>
      {filteredContacts.map(contact => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default ContactList;