import React from 'react';
import PropTypes from 'prop-types';
import Store from './Store';

const StoreList = (props) => {
  const { data } = props;

  const storeNodes = data.map((store) => {
    <Store store={store} key={store._id} />
  });

  return (
    <div>
      { storeNodes }
    </div>
  );
};

StoreList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    street: PropTypes.string,
    city: PropTypes.string,
    status: PropTypes.string,
  })),
};

StoreList.defaultProps = {
  data: [],
};

export default StoreList;
