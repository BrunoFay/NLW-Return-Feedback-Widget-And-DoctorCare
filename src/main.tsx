import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import FeedBackProvider from './context/FeedBackProvider'
import NavbarProvider from './context/NavbarProvider'
import { ParallaxProvider } from 'react-scroll-parallax';
import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavbarProvider>
      <FeedBackProvider>
        <ParallaxProvider>
          <App />
        </ParallaxProvider>
      </FeedBackProvider>
    </NavbarProvider>
  </React.StrictMode>
)
