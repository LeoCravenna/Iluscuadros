import React from 'react'
import './ItemList.css'

//COMPONENTES
import Item from '../Item/Item'

function ItemList({categoryItems}) {

    return (
        <div className="containerItemList">
            {categoryItems.map(prod => 
                
                <Item key={prod.id} item={prod} />

            )}
        </div>
    )
}

export default ItemList
