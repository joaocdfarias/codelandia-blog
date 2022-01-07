import React from 'react'
import './Header.css'
import '../../style/Container.css'

export const Header = () => {
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
        <input placeholder="Pesquisar no blog" type="search" />
      </div>
    </header>
  )
}
