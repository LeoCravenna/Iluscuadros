import React, { Component } from 'react'

//REACT-ROUTER-DOM
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// COMPONENTES
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

//VISTAS
import ContactMe from './views/ContactMe/ContactMe'
import Cart from './views/Cart/Cart'
import OrderForm from './views/OrderForm/OrderForm'

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
              <Route path="/item/:id" component={ItemDetailContainer} />
              <Route path="/category/:categoryId" component={ItemListContainer} />
              <Route path="/contactMe" component={ContactMe} />
              <Route path='/cart' component={Cart} />
              <Route path='/orderForm' component={OrderForm} />
            </Switch>
            
            <Footer />

          </div>  
        </Router>
      </CartProvider>
    )
  }
}

export default App;
