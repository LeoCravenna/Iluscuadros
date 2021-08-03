import React, { useEffect, useState } from 'react'
import { Icon } from 'semantic-ui-react'
import './ItemListContainer.css'

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
     
    let categorySelect = categoryItem.filter(item => item.category === categoryId);

    return (

        <div className='containerItem'>

            {isLoading === true ?
                <p className='loadingItem'><Icon loading name='spinner' /> Cargando...</p>
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
