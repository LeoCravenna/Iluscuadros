import React, { useEffect, useState } from 'react'
import axios from 'axios'

//COMPONENTES
//import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'

function ItemListContainer({match}) {

    let categoryId = match.params.categoryId;
    const [category, setCategory] = useState([]);

    useEffect(() => {
            axios('https://www.breakingbadapi.com/api/characters')
           .then(res => setCategory(res.data));    
    }, []);

    let categorySelect = category.filter(item => item.status === categoryId);
    
    return (
        <div style={{marginTop: '20px', marginBottom: '20px'}}>
            {categoryId !== undefined ? // SI EL ID DE LA CATEGORÍA ES DISTINTO A UNDEFINED, MUESTRA LA CATEGORÍA ELEGIDA                                               
                <ItemList categoryItems={categorySelect}/>
            
            :                           // SINO SIGNIFICA QUE EL ID ESTÁ VACÍO, POR ENDE MUESTRA TODO EL ARRAY
                <ItemList categoryItems={category}/>          
            }

            {/*<ItemCount stock={5} initial={1} onAdd={onAdd} />*/}
        </div>
    )
}

export default ItemListContainer
