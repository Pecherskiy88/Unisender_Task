import React from 'react';
import { useSelector } from 'react-redux';

import { currentUserSelector } from '../../redux/selectors/usersSelectors';

import { ReactComponent as IconAvatar } from '../../assets/icons/user-tie-solid.svg';
import { ReactComponent as IconCompany } from '../../assets/icons/building-solid.svg';
import { ReactComponent as IconLocation } from '../../assets/icons/map-marker-alt-solid.svg';
import { ReactComponent as IconLink } from '../../assets/icons/link-solid.svg';
import { ReactComponent as IconTwitter } from '../../assets/icons/twitter-brands.svg';
import { ReactComponent as IconAt } from '../../assets/icons/at-solid.svg';
import { ReactComponent as IconStar } from '../../assets/icons/star-solid.svg';
import { ReactComponent as IconGit } from '../../assets/icons/github-brands.svg';

import s from './style.module.css';

const AllInfoCard = () => {
  const userData = useSelector((state) => currentUserSelector(state));
  const {
    login,
    avatar_url: avatar,
    company,
    followers,
    location,
    email,
    twitter_username: twitter,
    blog,
    html_url: url,
  } = userData.data;

  return (
    <div className={s.wrapperInfo}>
      <div className={s.mainBlock}>
        <img className={s.bigAvatar} src={avatar} alt="avatar" />
        <div className={s.firstInfo}>
          <div className={s.row}>
            <span className={s.title}>
              <IconAvatar />
            </span>
            <span className={s.description}>{login}</span>
          </div>
          <div className={s.row}>
            <span className={s.title}>
              <IconCompany />
            </span>
            <span className={s.description}>{company}</span>
          </div>
          <div className={s.row}>
            <span className={s.title}>
              <IconLocation />
            </span>
            <span className={s.description}>{location}</span>
          </div>
          <div className={s.row}>
            <span className={s.title}>
              <IconLink />
            </span>
            <span className={s.description}>
              <a href={blog} target="_blank" rel="noopener noreferrer">
                {blog}
              </a>
            </span>
          </div>
          <div className={s.row}>
            <span className={s.title}>
              <IconTwitter />
            </span>
            <span className={s.description}>{twitter}</span>
          </div>
          <div className={s.row}>
            <span className={s.title}>
              <IconAt />
            </span>
            <span className={s.description}>{email}</span>
          </div>
          <div className={s.row}>
            <span className={s.title}>
              <IconStar />
            </span>
            <span className={s.description}>{followers}</span>
          </div>
          <div className={s.row}>
            <span className={s.title}>
              <IconGit />
            </span>
            <span className={s.description}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {url}
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInfoCard;
