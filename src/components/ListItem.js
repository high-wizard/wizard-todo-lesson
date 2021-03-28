import React from 'react'
import {motion} from 'framer-motion'
import '../styles/ListItem.css'

const ListItem = ({text}) => {

  const truncate = (str, n) => {
    return str && str.length > n ? str.substr(0, n -1) + "..." : str
  }

  return (
    <motion.li className="list-item" >
      <input
        className="list-item-input"
        type="checkbox"
      />
      <label className="list-item-label">
        {truncate(text, 30)}
      </label>
    </motion.li>
  )
}

export default ListItem