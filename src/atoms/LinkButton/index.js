import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './style.module.css';

const LinkButton = () => {
  return (
    <NavLink to="/" className={s.linkButton}>
      Кнопка
    </NavLink>
  );
};

export default LinkButton;
