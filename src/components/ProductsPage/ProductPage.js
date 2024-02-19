import React, { useEffect, useState } from "react";
import CardPlaceHolder from "../../Skeleton/CardPlaceHolder";
import { backendConfig } from "../../config";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsApi = backendConfig.endpoint + "/products";
      const response = await fetch(productsApi);
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-[100vh] flex  relative overflow-hidden">
      <div className="w-[18rem] h-full my-8 flex-none absolute bg-gray-100 ">
        {/* <div className="bg-red-100 fixed z-20 "></div> */}
      </div>
      <div className="p-8 ml-[18rem] flex flex-wrap justify-center gap-x-16 gap-y-10">
        {[...Array(12).keys()].map((_, index) => {
          return <CardPlaceHolder key={index + "a"} />;
        })}
      </div>
    </div>
  );
};

export default ProductPage;
