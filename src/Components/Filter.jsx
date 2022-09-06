import React from 'react';

export const Filter = ({ value, onFilter }) => {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={e => onFilter(e.currentTarget.value)}
      />
    </label>
  );
};
