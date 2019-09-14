import React from 'react';
import PropTypes from 'prop-types';

const MastMenu = (props) => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <path d="M19.27 9.23H4.73a.91.91 0 0 1 0-1.82h14.54a.91.91 0 1 1 0 1.82z" fill={color} />
      <path
        d="M21.09 12.91H2.91a.91.91 0 0 1 0-1.82h18.18a.91.91 0 1 1 0 1.82z"
        fill={color}
      />
      <path d="M19.27 16.5H4.73a.91.91 0 1 1 0-1.81h14.54a.91.91 0 1 1 0 1.81z" fill={color} />
    </svg>
  );
};

MastMenu.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MastMenu.defaultProps = {
  color: '#000',
  size: '24',
};

export default MastMenu;
