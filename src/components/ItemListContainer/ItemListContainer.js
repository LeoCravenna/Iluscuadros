import React, { useEffect, useState } from 'react'
import { Icon } from 'semantic-ui-react'
//import axios from 'axios'

//COMPONENTES
import ItemList from '../ItemList/ItemList'

//FIREBASE
import { db } from '../../Firebase/Firebase'

function ItemListContainer({match}) {

    let categoryId = match.params.categoryId;
    const [categoryItem, setCategoryItem] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getProductos = () => {
        db.collection('productos').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id })
            });
        setCategoryItem(docs); 
        });
    }

    useEffect(() => {
        getProductos(); 
        setIsLoading(false);              
    }, []);

    //////////////////////////////////////////////////
    /*useEffect(() => {
            axios('Json/Cuadros.json')
           .then(res => setCategoryItem(res.data));    
    }, []);
    console.log("id:",categoryItem);*/
    //////////////////////////////////////////////////
     
    let categorySelect = categoryItem.filter(item => item.category === categoryId);

    return (

        <div style={{marginTop: '20px', marginBottom: '20px'}}>

            {isLoading === true ?
                <p style={{fontSize: '30px', color: 'black'}}><Icon loading name='spinner' /> Cargando...</p>
            :
                <div>
                    {categoryId !== undefined ? // SI EL ID DE LA CATEGORÍA ES DISTINTO A UNDEFINED, MUESTRA LA CATEGORÍA ELEGIDA                                               
                        <ItemList categoryItems={categorySelect}/>
                    
                    :                           // SINO SIGNIFICA QUE EL ID ESTÁ VACÍO, POR ENDE MUESTRA TODO EL ARRAY
                        <ItemList categoryItems={categoryItem}/>          
                    }
                </div>

            }

        </div>

    )
}

export default ItemListContainer
