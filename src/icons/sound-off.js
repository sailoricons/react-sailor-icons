import React from 'react';
import PropTypes from 'prop-types';

const SoundOff = (props) => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <path
        d="M13.81 18.89a.66.66 0 0 1-.35-.11l-4.81-3.31.71-1 3.82 2.63V6.94L9.36 9.53l-.71-1 4.74-3.29a.62.62 0 0 1 1 .51l.07 12.53a.61.61 0 0 1-.33.56.73.73 0 0 1-.32.05z"
        fill={color}
      />
      <path
        d="M9 15.58H7.59a3.59 3.59 0 0 1 0-7.18H9a.62.62 0 0 1 .63.6v6a.62.62 0 0 1-.63.58zM7.59 9.64a2.35 2.35 0 1 0 0 4.7h.79v-4.7z"
        fill={color}
      />
      <path
        d="M19.57 14.21a.43.43 0 0 1-.3-.13l-3.55-3.55a.43.43 0 0 1 0-.61.42.42 0 0 1 .6 0l3.55 3.55a.43.43 0 0 1 0 .61.43.43 0 0 1-.3.13z"
        fill={color}
      />
      <path
        d="M16 14.21a.43.43 0 0 0 .3-.13l3.55-3.55a.43.43 0 0 0 0-.61.42.42 0 0 0-.6 0l-3.55 3.55a.43.43 0 0 0 0 .61.43.43 0 0 0 .3.13z"
        fill={color}
      />
    </svg>
  );
};

SoundOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SoundOff.defaultProps = {
  color: '#000',
  size: '24',
};

export default SoundOff;
