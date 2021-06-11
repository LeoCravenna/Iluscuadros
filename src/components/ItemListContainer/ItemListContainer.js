import React from 'react'

const pStyles = {
    color: 'rgb(20, 107, 220)',
    textAlign: 'center'
}

// Se puede pasar propiedad {title} en la función como parámetro
function ItemListContainer(props) {
    return (
        <div>
            <p style={pStyles}>{props.title}</p>
        </div>
    )
}

export default ItemListContainer
