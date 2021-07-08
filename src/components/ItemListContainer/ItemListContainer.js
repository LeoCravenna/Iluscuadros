import React, { useEffect, useState } from 'react'
import axios from 'axios'

//COMPONENTES
import ItemList from '../ItemList/ItemList'

function ItemListContainer({match}) {

    let categoryId = match.params.categoryId;
    const [categoryItem, setCategoryItem] = useState([]);

    useEffect(() => {
            axios('Json/Cuadros.json')
           .then(res => setCategoryItem(res.data));    
    }, []);

    console.log("id:",categoryItem);

    let categorySelect = categoryItem.filter(item => item.category === categoryId);
    
    return (
        <div style={{marginTop: '20px', marginBottom: '20px'}}>

            {categoryId !== undefined ? // SI EL ID DE LA CATEGORÍA ES DISTINTO A UNDEFINED, MUESTRA LA CATEGORÍA ELEGIDA                                               
                <ItemList categoryItems={categorySelect}/>
            
            :                           // SINO SIGNIFICA QUE EL ID ESTÁ VACÍO, POR ENDE MUESTRA TODO EL ARRAY
                <ItemList categoryItems={categoryItem}/>          
            }

        </div>
    )
}

export default ItemListContainer
