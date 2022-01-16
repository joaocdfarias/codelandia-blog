import React, { createContext, useState } from 'react'
import { SearchContextType } from '../types'

export const SearchContext = createContext<SearchContextType>({
  search: '',
  setSearch: () => {},
  handleSearch: () => '',
})

export const SearchContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [search, setSearch] = useState('')
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  return (
    <SearchContext.Provider value={{ search, setSearch, handleSearch }}>
      {children}
    </SearchContext.Provider>
  )
}
