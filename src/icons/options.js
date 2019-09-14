import React from 'react';
import PropTypes from 'prop-types';

const Options = (props) => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <ellipse className="cls-2" cx="4.05" cy="12" rx="2.05" ry="2" fill={color} />
      <ellipse className="cls-2" cx="12" cy="12" rx="2.05" ry="2" fill={color} />
      <ellipse className="cls-2" cx="19.95" cy="12" rx="2.05" ry="2" fill={color} />
    </svg>
  );
};

Options.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Options.defaultProps = {
  color: '#000',
  size: '24',
};

export default Options;
