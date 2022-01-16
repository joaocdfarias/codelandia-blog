import React, { useContext } from 'react'
import { SearchContext } from '../../contexts/SearchContext'
import './Header.css'
import '../../style/Container.css'

export const Header = () => {
  const { handleSearch } = useContext(SearchContext)

  return (
    <header>
      <div className="container wrapper">
        <nav>
          <a href="/">
            <h1> Codelândia </h1>
          </a>
          <a className="blog" href="/">
            blog
          </a>
        </nav>
        <input
          onChange={handleSearch}
          placeholder="Pesquisar no blog"
          type="search"
          role="search"
        />
      </div>
    </header>
  )
}
