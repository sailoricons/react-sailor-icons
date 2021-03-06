import React from 'react';
import PropTypes from 'prop-types';

const CompasNavigation = (props) => {
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
        d="M12 20a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm0-14.77A6.77 6.77 0 1 0 18.77 12 6.78 6.78 0 0 0 12 5.23z"
        fill={color}
      />
      <path
        d="M9 15.88a.45.45 0 0 1-.32-.14.46.46 0 0 1-.1-.51l2-4.53a.45.45 0 0 1 .33-.27.47.47 0 0 1 .42.13l2.57 2.58a.44.44 0 0 1 .13.41.47.47 0 0 1-.27.34l-4.62 1.95a.41.41 0 0 1-.14.04zm2.11-4.19l-1.27 2.84 2.84-1.22z"
        fill={color}
      />
      <path
        d="M13.49 13.92a.44.44 0 0 1-.33-.13l-2.58-2.58a.47.47 0 0 1 .15-.75l4.53-2a.46.46 0 0 1 .51.09.48.48 0 0 1 .1.51l-2 4.53a.46.46 0 0 1-.34.28zM11.72 11l1.61 1.61 1.23-2.83z"
        fill={color}
      />
      <path
        d="M12.2 6.31a.46.46 0 0 1-.46-.46V4.62a.46.46 0 0 1 .46-.47.47.47 0 0 1 .46.47v1.23a.47.47 0 0 1-.46.46z"
        fill={color}
      />
      <path
        d="M12.2 19.85a.46.46 0 0 1-.46-.47v-1.23a.46.46 0 0 1 .46-.46.47.47 0 0 1 .46.46v1.23a.47.47 0 0 1-.46.47z"
        fill={color}
      />
      <path d="M5.85 12.64H4.62a.47.47 0 1 1 0-.93h1.23a.47.47 0 0 1 0 .93z" fill={color} />
      <path d="M19.38 12.64h-1.23a.47.47 0 0 1 0-.93h1.23a.47.47 0 1 1 0 .93z" fill={color} />
    </svg>
  );
};

CompasNavigation.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CompasNavigation.defaultProps = {
  color: '#000',
  size: '24',
};

export default CompasNavigation;
