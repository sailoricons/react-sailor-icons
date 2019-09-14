import React from 'react';
import PropTypes from 'prop-types';

const Message = (props) => {
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
        d="M19 7v10H5.67V7H19m.67-1.33H5.14a.79.79 0 0 0-.8.8v11.06a.79.79 0 0 0 .8.8h14.4a.8.8 0 0 0 .8-.8V6.33a.67.67 0 0 0-.67-.66z"
        fill={color}
      />
      <path
        d="M18.93 7l-6.59 4.4L5.74 7h13.19m.74-1.33H5.13a.79.79 0 0 0-.79.8v.77a.78.78 0 0 0 .35.66L12 12.75a.63.63 0 0 0 .37.12.68.68 0 0 0 .37-.12l7.63-5.08V6.33a.67.67 0 0 0-.67-.66z"
        fill={color}
      />
    </svg>
  );
};

Message.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Message.defaultProps = {
  color: '#000',
  size: '24',
};

export default Message;
