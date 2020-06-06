import React from 'react';
import { NavLink } from 'react-router-dom';

import AllInfoCard from '../../components/ProfileCard/AllInfoCard';

import s from '../style.module.css';

const ProfileInfo = () => {
  return (
    <div className={s.wrapper}>
      <NavLink className={s.link} to="/">
        Home
      </NavLink>
      <AllInfoCard />
    </div>
  );
};

export default ProfileInfo;
