import React, { FC, useState } from 'react'
import { navbarContext } from './navbarContext'

interface IProviderProps {
  children: React.ReactNode
}
export  const NavbarProvider: FC<IProviderProps> = (props) => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false)
  const valueToProvide = {
    isNavBarOpen,
    setIsNavBarOpen
  }
  return (
    <navbarContext.Provider value={valueToProvide}>
      {props.children}
    </navbarContext.Provider>
  )
}
