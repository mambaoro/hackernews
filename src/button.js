import React from 'react';
import PropTypes from 'prop-types';

export function Button ({ onClick, className, children }) {
  return (
      <button
        onClick={onClick}
        className={className}
        type="Button"
      >
        {children}
      </button>
    );
  }

  Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
  };

  Button.defaultProps = {
    className : '',
  };
