import React from 'react'
import { BlogSection } from './components/BlogSection'

import { Header } from './components/Header'
import { SearchContextProvider } from './contexts/SearchContext'

import './style/App.css'
import './style/Container.css'

function App() {
  return (
    <SearchContextProvider>
      <div>
        <Header />
        <div className="container">
          <BlogSection />
        </div>
      </div>
    </SearchContextProvider>
  )
}

export default App
