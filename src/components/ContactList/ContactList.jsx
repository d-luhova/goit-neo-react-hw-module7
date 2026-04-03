import styles from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import { deleteContact } from '../../redux/contactsOps';

const ContactList = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(selectFilteredContacts);

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <div className={styles.contactList}>
      {contactsList.map(c => (
        <Contact key={c.id} {...c} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default ContactList;