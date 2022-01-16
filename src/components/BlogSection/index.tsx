import React, { useContext } from 'react'
import { Card } from '../Card'
import mock from '../../mocks/data.json'

import './BlogSection.css'
import { SearchContext } from '../../contexts/SearchContext'

export const BlogSection = () => {
  const { search } = useContext(SearchContext)

  return (
    <div className="card-wrapper">
      {mock
        .filter((item) => {
          if (search === '') {
            return item
          } else if (item.title.toLowerCase().includes(search.toLowerCase())) {
            return item
          }
          return null
        })
        .map((item) => {
          return (
            <Card date={item.date} title={item.title} content={item.content} />
          )
        })}
    </div>
  )
}
