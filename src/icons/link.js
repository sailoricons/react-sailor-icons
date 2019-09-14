import React from 'react';
import PropTypes from 'prop-types';

const Link = (props) => {
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
        d="M5.41 17.37a3.3 3.3 0 0 1-2.82-1.53l-.14-.23a2.92 2.92 0 0 1-.35-2.32 3.08 3.08 0 0 1 1.55-1.93L10 7.92a3.37 3.37 0 0 1 4.42 1.13l.14.22a3 3 0 0 1 .35 2.33 3.1 3.1 0 0 1-1.55 1.93.73.73 0 0 1-1-.3.74.74 0 0 1 .3-1 1.63 1.63 0 0 0 .82-1 1.47 1.47 0 0 0-.18-1.17l-.14-.23a1.87 1.87 0 0 0-2.46-.59l-6.35 3.42a1.67 1.67 0 0 0-.82 1 1.48 1.48 0 0 0 .18 1.16l.14.23a1.86 1.86 0 0 0 2.46.6l.69-.38a.74.74 0 0 1 .7 1.31L7 17a3.36 3.36 0 0 1-1.59.37z"
        fill={color}
      />
      <path
        d="M12.38 16.48A3.3 3.3 0 0 1 9.56 15l-.14-.22a3 3 0 0 1-.35-2.33 3.1 3.1 0 0 1 1.55-1.93.73.73 0 0 1 1 .3.74.74 0 0 1-.3 1 1.63 1.63 0 0 0-.82 1 1.47 1.47 0 0 0 .18 1.18l.14.23a1.87 1.87 0 0 0 2.46.59l6.37-3.43a1.67 1.67 0 0 0 .82-1 1.48 1.48 0 0 0-.18-1.16L20.15 9a1.86 1.86 0 0 0-2.46-.6l-1.06.57a.74.74 0 1 1-.7-1.3L17 7a3.37 3.37 0 0 1 4.42 1.13l.14.23a2.92 2.92 0 0 1 .35 2.32 3.08 3.08 0 0 1-1.55 1.93L14 16.08a3.39 3.39 0 0 1-1.62.4z"
        fill={color}
      />
    </svg>
  );
};

Link.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Link.defaultProps = {
  color: '#000',
  size: '24',
};

export default Link;
