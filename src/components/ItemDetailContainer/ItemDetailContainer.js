import React, { useEffect, useState } from 'react'
//import axios from 'axios'
import './ItemDetailContainer.css'

//COMPONENTES
import ItemDetail from '../../views/ItemDetail/ItemDetail'

//FIREBASEAPP
import { db } from '../../Firebase/Firebase'

function ItemDetailContainer({match}) {
    
    let itemID = match.params.id;

    const [items, setItems] = useState([]);
    
    const getItems = () => {
        db.collection('productos').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id })
            });
            setItems(docs); 
        });
    }

    useEffect(() => {
        getItems();           
    }, []);

    /////////////////////////////////////////////////////////////////////////////////////
    /*useEffect(() => {
    
        axios(`https://www.breakingbadapi.com/api/characters/${itemID}`).then((res) => 
            setItems(res.data)
        );
            
    }, [itemID])*/

    /*useEffect(() => {
        axios('../Json/Cuadros.json')
       .then(res => setItems(res.data));    
    }, []);*/
    /////////////////////////////////////////////////////////////////////////////////////

    let itemDetallado = items.filter(item => item.id === itemID);

    console.log(itemID);

    return (
        <div className="containerItemDetail">

            {itemDetallado.map(item => 
                
                <ItemDetail key={item.id} item={item}/>

            )}

        </div>
    )
}

export default ItemDetailContainer
