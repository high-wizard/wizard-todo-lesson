import React from 'react'
import ListItem from './ListItem'
import '../styles/List.css'

const List = () => {
  return (
    <div>
      <ul className="todos-list" animate="hidden">
        <ListItem text="Todo"/>
      </ul>
    </div>
  )
}

export default List