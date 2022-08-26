import React from 'react';
import { useMemo, useState } from 'react';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../redux/contactsSlice';
import Filter from './Filter';
import styles from '../Styles/styles.module.css';

const Contacts = () => {
  const { data } = useGetContactsQuery();
  const [filter, setFilter] = useState('');
  const [deleteContact] = useDeleteContactMutation();

  const filteredContacts = useMemo(() => {
    return (
      data?.filter(contact =>
        contact.name.toLocaleLowerCase().includes(filter.toLowerCase())
      ) ?? []
    );
  }, [filter, data]);

  const contactList = filter.length ? filteredContacts : data;

  return (
    <>
      <Filter value={filter} onFilter={setFilter} />
      <ul className={styles.List}>
        {contactList &&
          contactList?.map(({ id, name, phone }) => (
            <li key={id} className={styles.ListItem}>
              {name}: {phone}
              <button
                className={styles.BtnDelate}
                onClick={() => deleteContact(id)}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};
export default Contacts;
