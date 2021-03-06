import React from 'react';
import PropTypes from 'prop-types';

const RudderControls = (props) => {
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
        d="M12 17.88A5.88 5.88 0 1 1 17.88 12 5.89 5.89 0 0 1 12 17.88zm0-10.76A4.88 4.88 0 1 0 16.88 12 4.89 4.89 0 0 0 12 7.12z"
        fill={color}
      />
      <ellipse cx="12" cy="3.79" rx=".9" ry="1.79" fill={color} />
      <path
        d="M12 10.54a.34.34 0 0 1-.34-.33V5.58a.34.34 0 0 1 .68 0v4.63a.34.34 0 0 1-.34.33z"
        fill={color}
      />
      <ellipse cx="12" cy="20.21" rx=".9" ry="1.79" fill={color} />
      <path
        d="M12 18.75a.34.34 0 0 1-.34-.33v-4.63a.34.34 0 0 1 .68 0v4.63a.34.34 0 0 1-.34.33z"
        fill={color}
      />
      <ellipse cx="20.21" cy="12" rx="1.79" ry=".9" fill={color} />
      <path d="M18.41 12.34h-4.62a.34.34 0 0 1 0-.68h4.62a.34.34 0 0 1 0 .68z" fill={color} />
      <ellipse
        cx="17.81"
        cy="6.1"
        rx="1.79"
        ry=".9"
        transform="rotate(-45 17.813 6.092)"
        fill={color}
      />
      <path
        d="M13.28 11a.31.31 0 0 1-.24-.1.34.34 0 0 1 0-.48l3.27-3.26a.32.32 0 0 1 .47 0 .33.33 0 0 1 0 .47l-3.27 3.27a.3.3 0 0 1-.23.1z"
        fill={color}
      />
      <ellipse
        cx="6.27"
        cy="6.1"
        rx=".9"
        ry="1.79"
        transform="rotate(-45 6.273 6.092)"
        fill={color}
      />
      <path
        d="M10.8 11a.34.34 0 0 1-.24-.1L7.3 7.6a.33.33 0 0 1 0-.47.32.32 0 0 1 .47 0L11 10.39a.34.34 0 0 1 0 .48.33.33 0 0 1-.2.13z"
        fill={color}
      />
      <ellipse
        cx="17.81"
        cy="17.9"
        rx=".9"
        ry="1.79"
        transform="rotate(-45 17.815 17.9)"
        fill={color}
      />
      <path
        d="M16.54 17a.3.3 0 0 1-.23-.1L13 13.61a.34.34 0 0 1 0-.48.33.33 0 0 1 .47 0l3.27 3.27a.33.33 0 0 1 0 .47.31.31 0 0 1-.2.13z"
        fill={color}
      />
      <ellipse
        cx="6.27"
        cy="17.9"
        rx="1.79"
        ry=".9"
        transform="rotate(-45 6.275 17.9)"
        fill={color}
      />
      <path
        d="M7.53 17a.3.3 0 0 1-.23-.1.33.33 0 0 1 0-.47l3.26-3.27a.34.34 0 0 1 .48.48l-3.27 3.23a.31.31 0 0 1-.24.13z"
        fill={color}
      />
      <ellipse cx="3.79" cy="12" rx="1.79" ry=".9" fill={color} />
      <path d="M10.21 12.34H5.59a.34.34 0 0 1 0-.68h4.62a.34.34 0 0 1 0 .68z" fill={color} />
      <path
        d="M12 14.24A2.24 2.24 0 1 1 14.24 12 2.24 2.24 0 0 1 12 14.24zm0-3.58A1.34 1.34 0 1 0 13.34 12 1.34 1.34 0 0 0 12 10.66z"
        fill={color}
      />
      <path
        d="M12 10.66a.45.45 0 0 1-.45-.45v-.9a.45.45 0 1 1 .9 0v.9a.45.45 0 0 1-.45.45z"
        fill={color}
      />
      <path d="M14.69 12.45h-.9a.45.45 0 0 1 0-.9h.9a.45.45 0 1 1 0 .9z" fill={color} />
      <path d="M10.21 12.45h-.9a.45.45 0 0 1 0-.9h.9a.45.45 0 0 1 0 .9z" fill={color} />
      <path
        d="M10.82 11.1a.42.42 0 0 1-.31-.13l-.64-.64a.45.45 0 0 1 0-.63.47.47 0 0 1 .64 0l.63.63a.47.47 0 0 1 0 .64.44.44 0 0 1-.32.13z"
        fill={color}
      />
      <path
        d="M13.22 11.14a.45.45 0 0 1-.32-.14.45.45 0 0 1 0-.63l.64-.63a.45.45 0 1 1 .63.63l-.63.63a.47.47 0 0 1-.32.14z"
        fill={color}
      />
      <path
        d="M10.17 14.45a.44.44 0 0 1-.32-.13.47.47 0 0 1 0-.64l.64-.63a.45.45 0 0 1 .63 0 .47.47 0 0 1 0 .64l-.63.63a.45.45 0 0 1-.32.13z"
        fill={color}
      />
      <path
        d="M13.85 14.39a.42.42 0 0 1-.31-.13l-.64-.63a.45.45 0 0 1 0-.63.45.45 0 0 1 .64 0l.63.63a.45.45 0 0 1-.32.76z"
        fill={color}
      />
      <path
        d="M12 15.14a.45.45 0 0 1-.45-.45v-.9a.45.45 0 0 1 .9 0v.9a.45.45 0 0 1-.45.45z"
        fill={color}
      />
    </svg>
  );
};

RudderControls.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RudderControls.defaultProps = {
  color: '#000',
  size: '24',
};

export default RudderControls;
