import React from 'react';
import { useMemo, useState } from 'react';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../redux/contactsSlice';
import { Filter } from './Filter';

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
      <ul>
        {contactList &&
          contactList?.map(({ id, name, number }) => (
            <li key={id}>
              {name}: {number}
              <button onClick={() => deleteContact(id)}>Delete</button>
            </li>
          ))}
      </ul>
    </>
  );
};
export default Contacts;
