import React from 'react';
import PropTypes from 'prop-types';

const Folder = (props) => {
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
        d="M17.93 9a.37.37 0 0 1-.38-.37V7h-5.84a.38.38 0 1 1 0-.75h6.22a.38.38 0 0 1 .38.37v2.05a.37.37 0 0 1-.38.33z"
        fill={color}
      />
      <path d="M13.69 15.66H6.93a.38.38 0 0 1 0-.76h6.76a.38.38 0 1 1 0 .76z" fill={color} />
      <path d="M10.8 14.38H6.93a.38.38 0 0 1 0-.76h3.87a.38.38 0 0 1 0 .76z" fill={color} />
      <path
        d="M17.65 18.31H4.47a.47.47 0 0 1-.47-.47V6.16a.47.47 0 0 1 .47-.47h6.66a.47.47 0 0 1 .42.26l1.11 2.25h6.87a.47.47 0 0 1 .47.47V16a2.34 2.34 0 0 1-2.35 2.35zm-12.71-.94h12.71a1.37 1.37 0 0 0 1-.41 1.4 1.4 0 0 0 .42-1V9.14h-6.7a.47.47 0 0 1-.42-.26l-1.1-2.25H4.94z"
        fill={color}
      />
    </svg>
  );
};

Folder.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Folder.defaultProps = {
  color: '#000',
  size: '24',
};

export default Folder;
