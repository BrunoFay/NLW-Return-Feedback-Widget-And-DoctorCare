import React, { FC, useEffect, useState } from 'react'
import NavbarContext from './navbarContext'

interface IProviderProps {
  children: React.ReactNode
}
const NavbarProvider: FC<IProviderProps> = (props) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false)
  function toggleNavbar() {
    setIsNavbarOpen(!isNavbarOpen)
  }
  useEffect(() => {
    if(isNavbarOpen) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isNavbarOpen])
  
  const valueToProvide = {
    isNavbarOpen,
    setIsNavbarOpen,
    toggleNavbar
  }
  return (
    <NavbarContext.Provider value={valueToProvide}>
      {props.children}
    </NavbarContext.Provider>
  )
}
export default NavbarProvider