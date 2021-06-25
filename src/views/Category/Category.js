import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Item from '../../components/Item/Item'
import './Category.css'

function Category({match}) {
    let categoryId = match.params.categoryId;
    const [category, setCategory] = useState([]);

    useEffect(() => {
            axios('https://www.breakingbadapi.com/api/characters')
           .then(res => setCategory(res.data));    
    }, []);

    let categorySelect = category.filter(item => item.status === categoryId);
    
    return (
        <div className="containerGeneral">

            <h1 style={{ marginTop: '20px' }}>Categoría {categoryId} </h1>

            <div className="containerCategory">
                {categorySelect.map((item) => {
                    return (
                        <div key={item.char_id}>
                            
                            <Item item={item}/>
                            
                        </div>)
                })}
            </div>

        </div>
    )
}

export default Category
