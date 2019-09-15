import React from 'react';
import PropTypes from 'prop-types';

const Resize = (props) => {
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
        d="M4.73 10.86A.75.75 0 0 1 4 10.1V4.76A.75.75 0 0 1 4.73 4a.74.74 0 0 1 .72.76v5.34a.74.74 0 0 1-.72.76z"
        fill={color}
      />
      <path d="M9.45 5.52H4.73a.76.76 0 0 1 0-1.52h4.72a.76.76 0 0 1 0 1.52z" fill={color} />
      <path
        d="M10.21 11.25a.71.71 0 0 1-.52-.25l-5.1-5.32a.8.8 0 0 1 0-1.08.72.72 0 0 1 1 0l5.13 5.4a.79.79 0 0 1 0 1.07.71.71 0 0 1-.51.18z"
        fill={color}
      />
      <path
        d="M18.91 10.48a.75.75 0 0 1-.73-.77v-5a.73.73 0 1 1 1.46 0v5a.75.75 0 0 1-.73.77z"
        fill={color}
      />
      <path d="M18.91 5.52h-4.73a.76.76 0 0 1 0-1.52h4.73a.76.76 0 0 1 0 1.52z" fill={color} />
      <path
        d="M13.54 11.13a.73.73 0 0 1-.54-.23.8.8 0 0 1 0-1.08l4.89-5.11a.69.69 0 0 1 1 0 .78.78 0 0 1 0 1.08l-4.84 5.11a.71.71 0 0 1-.51.23z"
        fill={color}
      />
      <path
        d="M5.09 20a.75.75 0 0 1-.73-.76V13.9a.73.73 0 1 1 1.46 0v5.34a.75.75 0 0 1-.73.76z"
        fill={color}
      />
      <path d="M9.82 20H5.09a.76.76 0 0 1 0-1.52h4.73a.76.76 0 0 1 0 1.52z" fill={color} />
      <path
        d="M5.8 19.29a.7.7 0 0 1-.51-.22.8.8 0 0 1 0-1.08l4.84-5.07a.7.7 0 0 1 1 0 .8.8 0 0 1 0 1.08l-4.81 5.07a.7.7 0 0 1-.52.22z"
        fill={color}
      />
      <path
        d="M19.27 20a.74.74 0 0 1-.72-.76v-4.95a.74.74 0 0 1 .72-.77.75.75 0 0 1 .73.77v4.95a.75.75 0 0 1-.73.76z"
        fill={color}
      />
      <path d="M19.27 20h-4.72a.76.76 0 0 1 0-1.52h4.72a.76.76 0 0 1 0 1.52z" fill={color} />
      <path
        d="M18.81 19.48a.74.74 0 0 1-.51-.22l-5-5.26a.8.8 0 0 1 0-1.08.7.7 0 0 1 1 0l5 5.26a.8.8 0 0 1 0 1.08.74.74 0 0 1-.49.22z"
        fill={color}
      />
    </svg>
  );
};

Resize.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Resize.defaultProps = {
  color: '#000',
  size: '24',
};

export default Resize;