import React from 'react';
import PropTypes from 'prop-types';

const Voice = (props) => {
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
        d="M12 14.43a2.88 2.88 0 0 1-2.88-2.88V6.88a2.88 2.88 0 0 1 5.76 0v4.67A2.88 2.88 0 0 1 12 14.43zm0-9.06a1.52 1.52 0 0 0-1.51 1.51v4.67a1.51 1.51 0 0 0 3 0V6.88A1.52 1.52 0 0 0 12 5.37z"
        fill={color}
      />
      <path
        d="M12 16.87A5 5 0 0 1 6.93 12a.68.68 0 0 1 .68-.69.69.69 0 0 1 .69.69 3.6 3.6 0 0 0 3.7 3.49A3.6 3.6 0 0 0 15.7 12a.69.69 0 0 1 .69-.69.68.68 0 0 1 .68.69A5 5 0 0 1 12 16.87z"
        fill={color}
      />
      <path
        d="M12 20a.69.69 0 0 1-.69-.69v-2.78a.69.69 0 0 1 1.38 0v2.78A.69.69 0 0 1 12 20z"
        fill={color}
      />
      <path d="M15.13 20H8.87a.69.69 0 1 1 0-1.37h6.26a.69.69 0 1 1 0 1.37z" fill={color} />
      <rect x="11.55" y="7.52" width="3.1" height="1.04" rx=".52" ry=".52" fill={color} />
      <rect x="12.56" y="9.01" width="1.67" height="1.04" rx=".52" ry=".52" fill={color} />
    </svg>
  );
};

Voice.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Voice.defaultProps = {
  color: '#000',
  size: '24',
};

export default Voice;
