import React, { Component } from 'react'

// COMPONENTES
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer'

class App extends Component {

  render() {
    return (
      <div className="App">
        
        <Navbar />
        <ItemListContainer />
        <Footer />

      </div>  
    )
  }
}

export default App;
