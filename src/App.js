import React, { Component } from 'react'

// COMPONENTES
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <ItemListContainer title={'Item 1'} />
        <ItemListContainer title={'Item 2'} />
        <ItemListContainer title={'Item 3'} />
      </div>  
    )
  }
}

export default App;
