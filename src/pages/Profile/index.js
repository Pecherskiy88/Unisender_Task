import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getCurrentUser, clearStore } from '../../redux/actions/usersActions';
import { currentUserSelector } from '../../redux/selectors/usersSelectors';

import ProfileCard from '../../components/ProfileCard';

import Spinner from '../../assets/icons/spinner';

import s from '../style.module.css';

const Profile = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { login } = params;

  const userData = useSelector((state) => currentUserSelector(state));
  const { data, loading } = userData;

  useEffect(() => {
    dispatch(getCurrentUser(login));

    return () => dispatch(clearStore());
  }, [dispatch, login]);

  const renderSpinner = loading ? <Spinner fill="#000" /> : null;

  return (
    <div className={s.wrapper}>
      <NavLink className={s.link} to="/">
        Home
      </NavLink>
      <ProfileCard data={data} />
      {renderSpinner}
    </div>
  );
};

export default Profile;
