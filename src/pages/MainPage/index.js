import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts, clearStore } from '../../redux/actions/questionnaireActions';
import { userDataSelector } from '../../redux/selectors/usersSelectors';

import UsersList from '../../components/UsersList';

import s from '../style.module.css';

const MainPage = () => {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => userDataSelector(state));
  const { data } = usersData;

  useEffect(() => {
    dispatch(getPosts());

    return () => dispatch(clearStore());
  }, [dispatch]);

  return (
    <div className={s.wrapper}>
      <UsersList data={data} />
    </div>
  );
};

export default MainPage;
