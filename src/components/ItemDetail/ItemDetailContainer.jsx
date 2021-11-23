import {products} from '../Item/Items';
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';

const ItemDetailContainer = () => {

  const [detail, setDetail] = useState({});

  useEffect(() => {
    const getProduct = new Promise ((res)=> {
      setTimeout(()=>{
        res(products[2]);
      }, 1000);

    });

getProduct.then((result) => {
  setDetail(result);
});

}, [detail]);

return <ItemDetail detail= {detail}/>
} 

export default ItemDetailContainer;