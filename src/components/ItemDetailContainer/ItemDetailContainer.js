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


    /////////////////////////////////////////////////////////////////////////////////////
    /*const getItems = () => {
        db.collection('productos').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id })
            });
            setItems(docs); 
        });
    }*/

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

    //let itemDetallado = items.filter(item => item.id === itemID);

    console.log(itemID);

    return (
        <div className="containerItemDetail">
  
            <ItemDetail item={items}/>

        </div>
        
    )
}

export default ItemDetailContainer
