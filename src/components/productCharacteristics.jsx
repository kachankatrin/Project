import React from 'react'
import { Capitalize, sliceItemIfNeeded } from '../utils'

export function GetSingleItem(props) {
  return (
    <li><span className='infoName'>{props.name}: </span>
      {props.array.map((item, i) => {
        const cleanedItem = sliceItemIfNeeded(item)
        const spanElement = i < props.array.length - 1
          ? <span>{Capitalize(cleanedItem)}, </span>
          : <span>{Capitalize(cleanedItem)}</span>;
        return spanElement
      })
      }
    </li>
  )
}