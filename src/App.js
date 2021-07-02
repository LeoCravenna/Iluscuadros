import React, { Component } from 'react'

//REACT-ROUTER-DOM
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// COMPONENTES
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
//import Category from './views/Category/Category'

//VISTAS
//import Home from './views/Home/Home'
import AboutMe from './views/AboutMe/AboutMe'
import ContactMe from './views/ContactMe/ContactMe'
import Cart from './views/Cart/Cart'

//CONTEXT
import { CartProvider } from './CartContext/CartContext'

class App extends Component {

  render() {
    return (
      <CartProvider>
        <Router>
          <div className="App">
            
            <Navbar />
            
            <Switch>
              <Route path="/" exact component={ItemListContainer} />
              <Route path="/aboutMe" component={AboutMe} />
              <Route path="/item/:id" component={ItemDetailContainer} />
              <Route path="/category/:categoryId" component={ItemListContainer} />
              <Route path="/contactMe" component={ContactMe} />
              <Route path='/cart' component={Cart} />
            </Switch>
            
            <Footer />

          </div>  
        </Router>
      </CartProvider>
    )
  }
}

export default App;
