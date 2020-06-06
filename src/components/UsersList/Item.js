import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import LinkButton from '../../atoms/LinkButton';

import s from './style.module.css';

const Item = ({ avatar, login, link }) => {
  const history = useHistory();
  const handleClick = (login) => {
    history.push(`/profile/${login}`);
  };

  return (
    <li className={s.itemWrapper}>
      <div className={s.item}>
        <div className={s.avatarBlock} onClick={() => handleClick(login)}>
          <img className={s.avatar} src={avatar} alt="avatar" />
          <p className={s.name}>{login}</p>
        </div>
        <LinkButton link={link} />
      </div>
    </li>
  );
};

Item.propTypes = {
  avatar: PropTypes.string,
  login: PropTypes.string,
  link: PropTypes.string.isRequired,
};

export default Item;
