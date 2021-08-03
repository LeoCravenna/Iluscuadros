import React, { useEffect, useState } from 'react'
import './ItemDetailContainer.css'

//COMPONENTES
import ItemDetail from '../../views/ItemDetail/ItemDetail'

//FIREBASEAPP
import { db } from '../../Firebase/Firebase'

function ItemDetailContainer({match}) {
    
    let itemID = match.params.id;

    const [items, setItems] = useState([]);
    
    useEffect(() => {
        
        db.collection('productos').doc(itemID).get().then((res) => setItems({id:res.id, ...res.data()}));
     
    }, [itemID]);

    return (
        <div className="containerItemDetail">
  
            <ItemDetail item={items}/>

        </div>
        
    )
}

export default ItemDetailContainer
