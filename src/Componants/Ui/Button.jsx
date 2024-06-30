import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  className,
  to, 
  ...rest
}) => {
  return (
    <div className="buttons py-5  text-center">
    <Link to={to}> 
      <button
        className={`${className} text-uppercase text-light `}
        {...rest}>
        {children}
      </button>
    </Link>
    </div>
  ); 
};

export default Button;