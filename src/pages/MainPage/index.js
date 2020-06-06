import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getPosts,
  setPage,
  clearStore,
} from '../../redux/actions/usersActions';
import { userDataSelector } from '../../redux/selectors/usersSelectors';

import UsersList from '../../components/UsersList';
import Pagination from '../../atoms/Pagination';

import Spinner from '../../assets/icons/spinner';

import s from '../style.module.css';

const MainPage = () => {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => userDataSelector(state));
  const { data, loading, currentPage } = usersData;

  // Имитирую пагинацию, так как для users в api gitHub пагинация предусмотрена только для next через params since.
  const currentData =
    data.length > 0
      ? data.slice((currentPage - 1) * 10, currentPage * 10)
      : data;

  useEffect(() => {
    dispatch(clearStore());
    dispatch(getPosts());
  }, [dispatch]);

  const handlePageChange = (event, value) => {
    dispatch(setPage(value));
  };

  const renderSpinner = loading ? <Spinner fill="#000" /> : null;

  return (
    <>
      <div className={s.wrapper}>
        <UsersList data={currentData} />
      </div>
      <div className={s.paginationBlock}>
        <Pagination onChange={handlePageChange} page={currentPage} />
      </div>
      {renderSpinner}
    </>
  );
};

export default MainPage;
