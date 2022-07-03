import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navigate = () => {
  return (
    <nav>
        <NavLink to='/'>
            <button>Home</button>
        </NavLink>
        <NavLink to='/products'>
            <button>Products</button>
        </NavLink>
    </nav>
  )
}
