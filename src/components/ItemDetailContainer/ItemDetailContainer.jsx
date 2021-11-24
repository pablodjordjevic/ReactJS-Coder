import {products} from '../Item/Items';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from 'react';

const ItemDetailContainer = () => {

  const [detail, setDetail] = useState({});

  useEffect(() => {
    const getProduct = new Promise((res) => {
      setTimeout(()=>{
        res(products[0]);
      }, 1000);

    });

getProduct.then((result) => {
  setDetail(result);
});

}, [detail]);

return <ItemDetail detail= {detail}/>
} 

export default ItemDetailContainer;