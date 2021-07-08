import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './ItemDetailContainer.css'

//COMPONENTES
import ItemDetail from '../../views/ItemDetail/ItemDetail'

function ItemDetailContainer({match}) {
    
    let itemID = match.params.id;

    console.log("id recibido por parámetro:",itemID);
    const [items, setItems] = useState([]);
    
    /*useEffect(() => {
    
        axios(`https://www.breakingbadapi.com/api/characters/${itemID}`).then((res) => 
            setItems(res.data)
        );
            
    }, [itemID])*/

    useEffect(() => {
        axios('../Json/Cuadros.json')
       .then(res => setItems(res.data));    
    }, []);
    

console.log("Trae el item del json:",items);    

let itemDetallado = items.filter(item => item.id_cuadro === itemID);

console.log(itemID);

    return (
        <div className="containerItemDetail">

            {itemDetallado.map(item => 
                
                <ItemDetail key={item.id_cuadro} item={item}/>

            )}

        </div>
    )
}

export default ItemDetailContainer
