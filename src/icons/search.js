import React from 'react';
import PropTypes from 'prop-types';

const Search = (props) => {
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
        d="M19.6 18.59l-4-4a6.41 6.41 0 1 0-1 1l4 4a.74.74 0 0 0 1 0 .73.73 0 0 0 0-1zm-9-3a5 5 0 1 1 5-5 5 5 0 0 1-5.02 4.96z"
        fill={color}
      />
      <path
        d="M19.1 20a.85.85 0 0 1-.64-.27l-3.91-3.9a6.57 6.57 0 1 1 1.28-1.28l3.91 3.91A.91.91 0 0 1 19.1 20zm-4.52-4.69l4.15 4.15a.54.54 0 0 0 .73 0 .51.51 0 0 0 .15-.36.51.51 0 0 0-.15-.37l-4.15-4.15.11-.14a6.19 6.19 0 1 0-1 1zm-4 .43a5.16 5.16 0 1 1 5.16-5.16 5.16 5.16 0 0 1-5.16 5.16zm0-9.93a4.77 4.77 0 1 0 4.77 4.77 4.78 4.78 0 0 0-4.77-4.77z"
        fill={color}
      />
    </svg>
  );
};

Search.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Search.defaultProps = {
  color: '#000',
  size: '24',
};

export default Search;
