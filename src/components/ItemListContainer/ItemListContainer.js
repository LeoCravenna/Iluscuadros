import React from 'react'

//COMPONENTES
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'

// Se puede pasar propiedad {title} en la función como parámetro
function ItemListContainer() {

    //Función que muestra por consola la cantidad de unidades seleccionadas
    function onAdd(countMax) {
        console.log("Agregaste al carrito:", countMax, " unidad/es");
    }
    
    return (
        <div style={{marginTop: '20px', marginBottom: '20px'}}>
            <ItemList />
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
    )
}

export default ItemListContainer
