import React from 'react';

function Store(props) {
  const { store } = props;

  return (
    <div>
      <p>{store.name}</p>
    </div>
  );
}

export default Store;
