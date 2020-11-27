import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import "./TodoList.css"

const TodoList = () => {
  return (
    <div className="container">
      <h1 className="title">Example Todo</h1>
      <ul className="tools">
        <li className="tool">
          <FontAwesomeIcon className="delete-all-icon" icon={faTrashAlt} />
        </li>
      </ul>
      <div className="todo-list">
        <form className="todos-header">
          <input className="todos-header-input" type="text" />
          <input className="todos-header-plus" type="submit" value="＋"/>
        </form>
        <ul className="todos">
          <li className="todo">
            <input
              className="todo-checkbox"
              type="checkbox"
            />
            <label className="todo-text">
              メールの確認
            </label>
          </li>

          <li className="todo">
            <input
              className="todo-checkbox"
              type="checkbox"
            />
            <label className="todo-text">
              サーバーの契約
            </label>
          </li>

          <li className="todo">
            <input
              className="todo-checkbox"
              type="checkbox"
            />
            <label className="todo-text">
              お問い合わせ機能の作成
            </label>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TodoList