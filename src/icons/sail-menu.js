import React from 'react';
import PropTypes from 'prop-types';

const SailMenu = (props) => {
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
        d="M19.27 20H4.73a.73.73 0 0 1-.73-.73.73.73 0 0 1 .73-.72h14.54a.73.73 0 0 1 .73.72.73.73 0 0 1-.73.73z"
        fill={color}
      />
      <path
        d="M19.27 12.71H8.36a.73.73 0 0 1 0-1.46h10.91a.73.73 0 0 1 0 1.46z"
        fill={color}
      />
      <path
        d="M19.27 5.45H12a.73.73 0 0 1-.73-.72A.73.73 0 0 1 12 4h7.27a.73.73 0 0 1 .73.73.73.73 0 0 1-.73.72z"
        fill={color}
      />
    </svg>
  );
};

SailMenu.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SailMenu.defaultProps = {
  color: '#000',
  size: '24',
};

export default SailMenu;
