import React from 'react'
import { CardProps } from '../../types'
import HeartIcon from '../../assets/heart.svg'
import HeartIconFilled from '../../assets/heart-filled.svg'

import './Card.css'

export const Card = ({ date, title, content }: CardProps) => {
  const [click, setClick] = React.useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <div className="card">
      <p className="date"> {date} </p>
      <h3 className="title"> {title} </h3>
      <p className="content"> {content} </p>
      <img
        onClick={handleClick}
        className="heart"
        src={!click ? HeartIcon : HeartIconFilled}
        alt="Heart Icon"
      />
    </div>
  )
}
