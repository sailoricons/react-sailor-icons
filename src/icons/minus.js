import React from 'react';
import PropTypes from 'prop-types';

const Minus = (props) => {
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
        d="M21.09 12.91H2.91a.91.91 0 0 1 0-1.82h18.18a.91.91 0 1 1 0 1.82z"
        fill={color}
      />
    </svg>
  );
};

Minus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Minus.defaultProps = {
  color: '#000',
  size: '24',
};

export default Minus;
