import React from 'react'
import { Card } from '../Card'
import mock from '../../mocks/data.json'

import './BlogSection.css'

export const BlogSection = () => {
  const [click, setClick] = React.useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <div className="card-wrapper">
      <Card data={mock} click={click} setClick={handleClick} />
    </div>
  )
}
