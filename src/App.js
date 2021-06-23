import React, { Component } from 'react'

//REACT-ROUTER-DOM
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// COMPONENTES
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

//VISTAS
import Home from './views/Home/Home'
import AboutMe from './views/AboutMe/AboutMe'
import ContactMe from './views/ContactMe/ContactMe'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
        
          <Navbar />
          
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/aboutMe" component={AboutMe} />
            <Route path="/item/:id" component={ItemDetailContainer} />
            <Route path="/contactMe" component={ContactMe} />
          </Switch>

          <Footer />

        </div>  
      </Router>
    )
  }
}

export default App;
