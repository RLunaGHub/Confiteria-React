import "../../App.css";
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";

import { useParams, useLocation } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  const location = useLocation();

  const isRoot = location.pathname === "/";

  useEffect(() => {
    const asyncFunc = categoryId
      ? () => getProductsByCategory(categoryId)
      : getProducts;

    asyncFunc().then((response) => {
      setProducts(response);
    });
  }, [categoryId]);

  return (
    <div>
      {isRoot ? (
        <>
          <h1 className="greeting">{greeting}</h1>
          <br />
        </>
      ) : null}
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;

//Se define el componente ItemListContainer que será el contenedor del listado de productos.
//Se utiliza el hook useEffect para realizar una petición asíncrona a la función getProducts.
//Se incorpora el componente ItemList para que se renderice dentro del ItemListContainer.
//Se genera una variable booleana que inicialice como true si la aplicación se encuentra en '/' o false caso contrario.
//Se utiliza el hook useLocation para renderizar el contenido del greeting, unicamente si la aplicación se encuentra en su Home '/'
