import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  className,
  to, 
  devStyle,
  color ='text-light',
  ...rest
}) => {
  return (
    <div className={`buttons ${devStyle}`}>
    <Link to={to}> 
      <button
        className={`${className} text-uppercase ${color} `}
        {...rest}>
        {children}
      </button>
    </Link>
    </div>
  ); 
};

export default Button;