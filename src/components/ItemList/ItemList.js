import React from 'react'
//import axios from 'axios'
import './ItemList.css'
//import cuadros from '../../cuadros.json'

//COMPONENTES
import Item from '../Item/Item'

function ItemList({categoryItems}) {

    return (
        <div className="containerItemList">
            {categoryItems.map(prod => 
                
                <Item key={prod.char_id} item={prod} />

            )}
        </div>
    )
}

export default ItemList
