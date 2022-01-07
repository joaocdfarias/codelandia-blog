import React from 'react'
import { BlogSection } from './components/BlogSection'

import { Header } from './components/Header'

import './style/App.css'
import './style/Container.css'

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <BlogSection />
      </div>
    </div>
  )
}

export default App
