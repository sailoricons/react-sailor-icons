import React from 'react';
import PropTypes from 'prop-types';

const ChevronUp = (props) => {
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
        d="M21.09 17.45a.89.89 0 0 1-.64-.26L12 8.74l-8.45 8.45a.91.91 0 1 1-1.28-1.29l9.09-9.09a.91.91 0 0 1 1.28 0l9.09 9.09a.91.91 0 0 1 0 1.29.88.88 0 0 1-.64.26z"
        fill={color}
      />
    </svg>
  );
};

ChevronUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChevronUp.defaultProps = {
  color: '#000',
  size: '24',
};

export default ChevronUp;
