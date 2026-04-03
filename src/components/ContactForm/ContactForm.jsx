import styles from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import { selectContacts } from '../../redux/contactsSlice';

const initialValues = { name: '', number: '' };
const schema = Yup.object({
  name: Yup.string().min(3).max(50).required('Required'),
  number: Yup.string().min(3).max(50).required('Required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const allContacts = useSelector(selectContacts);

  const handleSubmit = (values, actions) => {
    if (allContacts.some(c => c.name.toLowerCase() === values.name.toLowerCase())) {
      alert(`${values.name} is already in contacts.`);
      return;
    }
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
      <Form className={styles.contactForm}>
        <div>
          <label>Name</label>
          <Field name="name" className={styles.input} />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </div>
        <div>
          <label>Number</label>
          <Field name="number" className={styles.input} />
          <ErrorMessage name="number" component="div" className={styles.error} />
        </div>
        <button type="submit" className={styles.button}>Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;