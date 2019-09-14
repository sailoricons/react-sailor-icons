import React from 'react';
import PropTypes from 'prop-types';

const Download = (props) => {
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
        d="M19.27 20H4.73a.73.73 0 0 1-.73-.73V15.5a.73.73 0 0 1 .73-.73.72.72 0 0 1 .72.73v3.05h13.1V15.5a.72.72 0 0 1 .72-.73.73.73 0 0 1 .73.73v3.77a.73.73 0 0 1-.73.73z"
        fill={color}
      />
      <path
        d="M12 16a.72.72 0 0 1-.72-.73V4.69A.73.73 0 0 1 12 4a.73.73 0 0 1 .73.73v8.94L17 9.84a.73.73 0 1 1 1 1.08l-5.5 4.93a.74.74 0 0 1-.5.15z"
        fill={color}
      />
      <path
        d="M12 16a.72.72 0 0 1-.49-.19l-5.4-4.91a.73.73 0 0 1 0-1 .72.72 0 0 1 1-.05l5.41 4.92a.73.73 0 0 1 .05 1A.74.74 0 0 1 12 16z"
        fill={color}
      />
    </svg>
  );
};

Download.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Download.defaultProps = {
  color: '#000',
  size: '24',
};

export default Download;
