import styles from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={styles.contact}>
      <div className={styles.contactInfo}>
        <p className={styles.data}>
          <FaUser className={styles.icon} /> {name}
        </p>
        <p className={styles.data}>
          <FaPhone className={styles.icon} /> {number}
        </p>
      </div>
      <button className={styles.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default Contact;