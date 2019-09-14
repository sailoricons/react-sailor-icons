import React from 'react';
import PropTypes from 'prop-types';

const File = (props) => {
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
        d="M17.59 20H6.32a1 1 0 0 1-1-1V4.88A.88.88 0 0 1 6.21 4h7a.69.69 0 0 1 .7.69.7.7 0 0 1-.7.7H6.72V18.6h10.56V9.17a.7.7 0 0 1 1.39 0v9.75A1.08 1.08 0 0 1 17.59 20z"
        fill={color}
      />
      <path
        d="M13.6 9.82a.91.91 0 0 1-.6-.25 1 1 0 0 1-.27-.75V5a.79.79 0 0 1 .44-.79.76.76 0 0 1 .83.19l4.25 4a.82.82 0 0 1 .23.9.83.83 0 0 1-.8.51h-4.06zm3.69-.42zm-3.2-3v2h2.15zm3.57 2zM13.48 5z"
        fill={color}
      />
    </svg>
  );
};

File.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

File.defaultProps = {
  color: '#000',
  size: '24',
};

export default File;
