import React from 'react'
import './App.css'
import Container from './components/Container'
import ListHeader from './components/ListHeader'
import List from './components/List'
import SideButtons from './components/SideButtons'

function App() {
  return (
    <div className="App">
      <Container>
        <h1 className="title">Example Todo</h1>
        <div className="content">
          <SideButtons/>
          <div className="list">
            <ListHeader
            />
            <List/>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App


