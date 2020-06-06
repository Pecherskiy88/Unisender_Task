import React from 'react';
import PropTypes from 'prop-types';

import s from './style.module.css';

const LinkButton = ({ link }) => {
  return (
    <a
      className={s.linkButton}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
    </a>
  );
};

LinkButton.propTypes = {
  link: PropTypes.string.isRequired,
};

export default LinkButton;
