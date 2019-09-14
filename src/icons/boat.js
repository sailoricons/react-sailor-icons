import React from 'react';
import PropTypes from 'prop-types';

const Boat = (props) => {
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
        d="M12 20a7.47 7.47 0 0 1-7-4.85.43.43 0 0 1 0-.4.42.42 0 0 1 .36-.19h13.2a.42.42 0 0 1 .36.19.43.43 0 0 1 0 .4A7.47 7.47 0 0 1 12 20zm-5.9-4.57a6.56 6.56 0 0 0 11.8 0z"
        fill={color}
      />
      <rect x="11.56" y="9.37" width=".88" height="5.64" fill={color} />
      <path
        d="M12 14.09H8.3a.44.44 0 0 1-.39-.23.43.43 0 0 1 0-.45l3.71-5.55a.44.44 0 0 1 .49-.18.45.45 0 0 1 .31.42v5.55a.44.44 0 0 1-.42.44zm-2.89-.88h2.45V9.55z"
        fill={color}
      />
      <path
        d="M18 13.45h-5.83a.44.44 0 0 1-.44-.44V4.44A.45.45 0 0 1 12 4a.43.43 0 0 1 .49.17l5.79 8.58a.43.43 0 0 1-.36.68zm-5.35-.87h4.52l-4.56-6.71z"
        fill={color}
      />
    </svg>
  );
};

Boat.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Boat.defaultProps = {
  color: '#000',
  size: '24',
};

export default Boat;
