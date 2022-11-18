import React from 'react'
import HeroGraphic from './HeroGraphic'

const Layout = ({children}) => {
  return (
    <div>
        <HeroGraphic>
          {children}
        </HeroGraphic>
    </div>
  )
}

export default Layout