import styles from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { selectContacts } from '../../redux/contactsSlice';
import { nanoid } from 'nanoid';

const initialValues = { name: '', number: '' };

const schema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short').max(50, 'Too long').required('Required'),
  number: Yup.string().min(3, 'Too short').max(50, 'Too long').required('Required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const nameInputId = useId();
  const numberInputId = useId();

  const handleSubmit = (values, actions) => {
    const isDuplicate = contacts.some(c => c.name.toLowerCase() === values.name.toLowerCase());
    if (isDuplicate) {
      alert(`${values.name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ ...values, id: nanoid() }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
      validateOnBlur={true}
      validateOnChange={false} 
    >
      <Form className={styles.contactForm}>
        <div>
          <label htmlFor={nameInputId}>Name</label>
          <Field id={nameInputId} name="name" className={styles.input} />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </div>
        <div>
          <label htmlFor={numberInputId}>Number</label>
          <Field id={numberInputId} name="number" className={styles.input} />
          <ErrorMessage name="number" component="div" className={styles.error} />
        </div>
        <button className={styles.button} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;