import React from "react"
import "../styles/ListHeader.css"

const ListHeader = () => {
  return (
    <div className="list-header">
      <form className="list-header-form">
        <input className="list-header-input" type="text"/>
        <button className="list-header-button">＋</button>
      </form>
    </div>
  )
}

export default ListHeader