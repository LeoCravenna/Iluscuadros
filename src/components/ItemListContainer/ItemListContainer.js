import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

// Se puede pasar propiedad {title} en la función como parámetro
function ItemListContainer() {
    
    function onAdd(countMax) {
        console.log("Agregaste al carrito:", countMax, " unidad/es");
    }
    
    return (
        <div style={{marginTop: '20px'}}>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
    )
}

export default ItemListContainer
