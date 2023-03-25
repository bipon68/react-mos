import React, { Children } from 'react'

interface Props{
    children: string;
    color?: 'primary' | 'secondary' | 'danger';
    onClick: () => void;
}


const Button = ({children, onClick, color='secondary'}: Props) => {
  return (
    <button className={'btn btn-' + color} onClick={onClick}>{children}</button>
  )
}

export default Button