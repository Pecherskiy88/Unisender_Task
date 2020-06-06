import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

import s from './style.module.css';

const UsersList = ({ data }) => {
  const renderItems =
    data.length > 0
      ? data.map((el) => (
          <Item
            key={el.id}
            avatar={el.avatar_url}
            login={el.login}
            link={el.html_url}
          />
        ))
      : [];
  return <ul className={s.list}>{renderItems}</ul>;
};

UsersList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default UsersList;
