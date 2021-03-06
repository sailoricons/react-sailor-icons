import React from 'react';
import PropTypes from 'prop-types';

const Mark = (props) => {
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
        d="M15 19a.63.63 0 0 1-.34-.1l-9-5.2a.71.71 0 0 1-.32-.44L4 7.55a.69.69 0 0 1 .46-.81L10.09 5a.66.66 0 0 1 .55.06l9 5.2a.69.69 0 0 1 .25.94l-4.29 7.43a.7.7 0 0 1-.6.37zm-8.4-6.33l8.17 4.71 3.61-6.24-8.17-4.72L5.5 7.87z"
        fill={color}
      />
      <path
        d="M9.13 11.87a2 2 0 0 1-1.05-.29 2.11 2.11 0 0 1-.78-2.89 2.12 2.12 0 0 1 2.89-.77 2.12 2.12 0 0 1-1.06 3.95zm0-2.87a.74.74 0 0 0-.64.37.73.73 0 0 0-.08.56.78.78 0 0 0 .35.46A.75.75 0 1 0 9.13 9z"
        fill={color}
      />
    </svg>
  );
};

Mark.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Mark.defaultProps = {
  color: '#000',
  size: '24',
};

export default Mark;
