import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import CardPlaceHolder from "../../Skeleton/CardPlaceHolder";
import { backendConfig } from "../../config";
import SelectComponent from "./SelectComponent";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsApi = backendConfig.endpoint + "/products";
        const response = await fetch(productsApi);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="pt-[2.5rem]">
      <div className="flex  justify-between px-16 py-4 text-[#394b53] items-end ">
        <p className="text-md -ml-10 font-bold uppercase">Filters</p>
        <SelectComponent />
      </div>
      <div className="min-h-[100vh] grid grid-cols-10 ">
        <div className="col-span-2 relative border-r-2 border-t-2 min-h-full p-4 ">
          <div className="sticky top-10">
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
          </div>
        </div>
        <div className="col-span-8 grid grid-cols-12 p-5 place-items-center border-t-2 min-h-full">
          {[...Array(12).keys()].map((_, index) => {
            return (
              <div className="col-span-4 p-5" key={index}>
                <CardPlaceHolder />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
