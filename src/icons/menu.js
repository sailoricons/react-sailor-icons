import React from 'react';
import PropTypes from 'prop-types';

const Menu = (props) => {
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
        d="M19.27 5.45H4.73A.73.73 0 0 1 4 4.73.73.73 0 0 1 4.73 4h14.54a.73.73 0 0 1 .73.73.73.73 0 0 1-.73.72z"
        fill={color}
      />
      <path
        d="M19.27 12.75H4.73a.73.73 0 0 1 0-1.46h14.54a.73.73 0 0 1 0 1.46z"
        fill={color}
      />
      <path
        d="M19.27 20H4.73a.73.73 0 0 1-.73-.73.73.73 0 0 1 .73-.72h14.54a.73.73 0 0 1 .73.72.73.73 0 0 1-.73.73z"
        fill={color}
      />
    </svg>
  );
};

Menu.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Menu.defaultProps = {
  color: '#000',
  size: '24',
};

export default Menu;
