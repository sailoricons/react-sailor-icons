import React from 'react';
import PropTypes from 'prop-types';

const ChevronDown = (props) => {
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
        d="M12 17.45a.88.88 0 0 1-.64-.26L2.27 8.1a.91.91 0 0 1 1.28-1.29L12 15.26l8.45-8.45a.91.91 0 0 1 1.28 1.29l-9.09 9.09a.88.88 0 0 1-.64.26z"
        fill={color}
      />
    </svg>
  );
};

ChevronDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChevronDown.defaultProps = {
  color: '#000',
  size: '24',
};

export default ChevronDown;
