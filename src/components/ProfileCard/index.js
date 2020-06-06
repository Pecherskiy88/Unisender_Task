import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';

import DefaultAvatar from '../../assets/icons/default_avatar.png';

import s from './style.module.css';

const ProfileCard = ({ data }) => {
  const { login, location, created_at: created, avatar_url: avatar } = data;
  const history = useHistory();

  const handleClick = () => {
    history.push(`/info/`);
  };

  return (
    <div
      className={s.wrapper}
      onDoubleClick={handleClick}
      data-title="Double click for more info..."
    >
      <img className={s.avatar} src={avatar || DefaultAvatar} alt="avatar" />
      <div className={s.infoBlock}>
        <h2 className={s.name}>{login}</h2>
        <p className={s.location}>{location}</p>
        <p className={s.date}>{`From ${moment(created).format(
          'DD/MM/YYYY',
        )}`}</p>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProfileCard;
