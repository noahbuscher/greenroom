import React from 'react';
import PropTypes from 'prop-types';
import Store from './Store';

const StoreList = (props) => {
  const { stores } = props;

  return (
    <div>
      {stores.map(function(store, index) {
        return <Store key={store.cuid} store={store} />;
      })}
    </div>
  );
};

StoreList.propTypes = {
  stores: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    street: PropTypes.string,
    city: PropTypes.string,
    status: PropTypes.string,
  })),
};

StoreList.defaultProps = {
  stores: [],
};

export default StoreList;
