import React from 'react';
import PropTypes from 'prop-types';

import Pagination from '@material-ui/lab/Pagination';

const MyPagination = ({ page, onChange }) => {
  return <Pagination count={10} page={page} onChange={onChange} />;
};

MyPagination.propTypes = {
  onChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

export default MyPagination;
