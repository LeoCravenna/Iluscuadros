import React, {useState, useEffect} from 'react'
import './ItemList.css'

//COMPONENTES
import Item from '../Item/Item'

function ItemList() {

    const [prods, setProds] = useState([])

    useEffect(() => {
        const promesa = new Promise((resolve,reject) => {
            
            setTimeout(() => {
                
                resolve([
                    {id: 1, 
                     title: "The R2-D2", 
                     description: "Perteneció a las fuerzas de defensa en Naboo sirvió al Rey Veruna durante su término...",
                     price: 1000, 
                     pictureUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/070/999/products/sw-39-clara-vertical331-35ac2895feded9dd5016221360326333-1024-1024.png"
                    },
                    {id: 2, 
                     title: "Jedi Master Yoda", 
                     description: "'El miedo es el camino hacia el lado oscuro. El miedo lleva a la ira. La ira lleva al odio. El odio lleva al sufrimiento.' ", 
                     price: 1100, 
                     pictureUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/070/999/products/sw-25-clara-vertical221-2d82de5a76f5f4d55e16221358485015-1024-1024.png"
                    },
                    {id: 3, 
                     title: "The Dark Side", 
                     description: "El lado oscuro de la Fuerza , llamado Bogan o Boga por los antiguos sensibles a la Fuerza en Tython...",
                     price: 1300, 
                     pictureUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/070/999/products/sw-35-oscura-horizontal1-f19e2cd36211a8d82516221360279211-1024-1024.png"
                    }
                ])

            }, 2000);

        })
        promesa.then((resultado) => {
            setProds(resultado);
        })
    }, [])

    console.log('Listado Productos:', prods);

    return (
        <div className="containerItemList">
            {prods.map(prod => 
                
                <Item key={prod.id} item={prod} />

            )}
        </div>
    )
}

export default ItemList
