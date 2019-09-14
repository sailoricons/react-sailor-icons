import React from 'react';
import PropTypes from 'prop-types';

const Done = (props) => {
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
        d="M10.21 19a.9.9 0 0 1-.64-.27l-6.06-6.11a.89.89 0 0 1 0-1.28.91.91 0 0 1 1.29 0l5.41 5.41L21.69 5.28A.91.91 0 0 1 23 6.56L10.86 18.68a.9.9 0 0 1-.64.27z"
        fill={color}
      />
    </svg>
  );
};

Done.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Done.defaultProps = {
  color: '#000',
  size: '24',
};

export default Done;
