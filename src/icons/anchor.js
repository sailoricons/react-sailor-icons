import React from 'react';
import PropTypes from 'prop-types';

const Anchor = (props) => {
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
        d="M12 4.73a.94.94 0 0 1 1 .89 1 1 0 0 1-2 0 .94.94 0 0 1 1-.89M12 4a1.7 1.7 0 0 0-1.76 1.62A1.69 1.69 0 0 0 12 7.23a1.69 1.69 0 0 0 1.77-1.61A1.7 1.7 0 0 0 12 4z"
        fill={color}
      />
      <path
        d="M12 18.87a.75.75 0 0 1-.78-.73V7.47a.78.78 0 0 1 1.56 0v10.67a.75.75 0 0 1-.78.73z"
        fill={color}
      />
      <path
        d="M12 20c-3.08 0-5.58-1.92-5.58-4.29a.78.78 0 0 1 1.56 0c0 1.56 1.8 2.84 4 2.84s4-1.28 4-2.84a.78.78 0 0 1 1.56 0C17.58 18.08 15.07 20 12 20z"
        fill={color}
      />
      <path d="M16 9.28H8.05a.73.73 0 1 1 0-1.45H16a.73.73 0 1 1 0 1.45z" fill={color} />
      <path
        d="M5.78 17.75h-.21a.73.73 0 0 1-.54-.9l.57-1.92a.76.76 0 0 1 .94-.51l2.28.58a.73.73 0 0 1 .56.88.78.78 0 0 1-1 .52L6.89 16l-.36 1.24a.78.78 0 0 1-.75.51z"
        fill={color}
      />
      <path
        d="M18.22 17.75a.78.78 0 0 1-.75-.53L17.11 16l-1.54.37a.78.78 0 0 1-1-.52.73.73 0 0 1 .56-.88l2.28-.55a.76.76 0 0 1 .94.51l.65 1.9a.73.73 0 0 1-.54.9z"
        fill={color}
      />
    </svg>
  );
};

Anchor.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Anchor.defaultProps = {
  color: '#000',
  size: '24',
};

export default Anchor;
