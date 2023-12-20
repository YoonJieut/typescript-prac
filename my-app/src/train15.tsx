import { resolve } from "path"
import { useEffect, useState } from "react"


const fetchProducts = async () => {
  return new Promise(resolve -> {
    setTimeout(() => {
      resolve([
        {id:1, title:'김치',price:'5000원'},
        {id:2, title:'라면',price:'3000원'},
        {id:3, title:'삼겹살',price:'15000원'},
      ])
    }, 500);
  });
};

const Carousel = ({fetchProducts}) =>{
  const {products, setProducts} = useState([]);

  useEffect(()=>{
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    loadProducts();
  }, [fetchProducts]);

  if(products.length === 0){
    return <div>loading...</div>;
  }

  return (
    <div>
      <ul>
        {products.map((product)=>(
          <li key={product.id}>
            {product.title} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Carousel;

const Example = ()=>{
  return <Carousel fetchProducts={fetchProducts} />
}
export module Example;