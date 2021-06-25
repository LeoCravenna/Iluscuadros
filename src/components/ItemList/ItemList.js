import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './ItemList.css'
//import cuadros from '../../cuadros.json'

//COMPONENTES
import Item from '../Item/Item'

function ItemList() {

    const [prods, setProds] = useState([])

    useEffect(() => {
        //const promesa = new Promise((resolve,reject) => {
            
            setTimeout(() => {
            
                //resolve(cuadros)
                axios.get('https://www.breakingbadapi.com/api/characters').then((res) => setProds(res.data));

            }, 2000);

        //})
        /*promesa.then((resultado) => {
            setProds(resultado);
        })*/
    }, [])

    console.log('Listado de Cuadros:', prods);

    return (
        <div className="containerItemList">
            {prods.map(prod => 
                
                <Item key={prod.char_id} item={prod} />

            )}
        </div>
    )
}

export default ItemList
