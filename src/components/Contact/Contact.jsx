import styles from "./Contact.module.css";
import { FaUser, FaPhone } from 'react-icons/fa';

function Contact({ id, name, number, onDelete }) {
  return (
    <div className={styles.contact}>
      <div className={styles.contactInfo}>
        <p className={styles.data}><FaUser className={styles.icon} /> {name}</p>
        <p className={styles.data}><FaPhone className={styles.icon} /> {number}</p>
      </div>
      <button className={styles.deleteButton} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}

export default Contact;