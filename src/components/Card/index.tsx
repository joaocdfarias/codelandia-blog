import React from 'react'
import { CardProps } from '../../types'
import HeartIcon from '../../assets/heart.svg'
import HeartIconFilled from '../../assets/heart-filled.svg'

import './Card.css'

export const Card = ({ data, click, setClick }: CardProps) => {
  return (
    <>
      {data.map((item, id) => {
        return (
          <div className="card" key={id}>
            <p className="date"> {item.date} </p>
            <h3 className="title"> {item.title} </h3>
            <p className="content"> {item.content} </p>
            <img
              onClick={setClick}
              className="heart"
              src={!click ? HeartIcon : HeartIconFilled}
              alt="Heart Icon"
            />
          </div>
        )
      })}
    </>
  )
}
