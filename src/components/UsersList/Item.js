import React from 'react';
import PropTypes from 'prop-types';

import LinkButton from '../../atoms/LinkButton';

import s from './style.module.css';

const Item = ({ avatar, login }) => {
  return (
    <li className={s.itemWrapper}>
      <div className={s.item}>
        <div className={s.avatarBlock}>
          <img className={s.avatar} src={avatar} alt="avatar" />
          <p className={s.name}>{login}</p>
        </div>
        <LinkButton />
      </div>
    </li>
  );
};

Item.propTypes = {
  avatar: PropTypes.string,
  login: PropTypes.string,
};

export default Item;
