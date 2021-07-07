import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './ItemDetailContainer.css'

//COMPONENTES
import ItemDetail from '../../views/ItemDetail/ItemDetail'

function ItemDetailContainer({match}) {
    
    let itemID = match.params.id;
    const [items, setItems] = useState([]);
    
    useEffect(() => {
    
        axios(`https://www.breakingbadapi.com/api/characters/${itemID}`).then((res) => 
            setItems(res.data)
        );
            
    }, [itemID])
    
    return (
        <div className="containerItemDetail">

            {items.map(item => 
                
                <ItemDetail key={item.char_id} item={item}/>

            )}

        </div>
    )
}

export default ItemDetailContainer
