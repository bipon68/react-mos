import React from 'react'

interface Props{
  children?: string;
  color: 'primary' | 'secondary' | 'primary';
  onClick: () => void;
}

const Button = ({children, onClick, color}: Props) => {
  return (
    <button onClick={onClick} className={'btn btn-' + color}>{children}</button>
  )
}

export default Button