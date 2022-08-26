import React from 'react';
import styles from '../Styles/styles.module.css';

const Filter = ({ value, onFilter }) => {
  return (
    <label className={styles.Label}>
      Find contacts by name
      <input
        className={styles.Input}
        type="text"
        value={value}
        onChange={e => onFilter(e.currentTarget.value)}
      />
    </label>
  );
};

export default Filter;
