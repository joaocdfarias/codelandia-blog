import React from 'react'
import { Card } from '../Card'
import mock from '../../mocks/data.json'

import './BlogSection.css'

export const BlogSection = () => {
  return (
    <div className="card-wrapper">
      {mock.map((item) => {
        return (
          <Card date={item.date} title={item.title} content={item.content} />
        )
      })}
    </div>
  )
}
