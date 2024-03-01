import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import CardPlaceHolder from "../../Skeleton/CardPlaceHolder";
import { backendConfig } from "../../config";
import SelectComponent from "./SelectComponent";
import Sidebar from "./Sidebar";

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
        <div className="w-64 -ml-10 font-bold uppercase flex justify-between items-center">
          <p className="text-md">Filters</p>
          <p className="text-sm text-[#ed4f7a] cursor-pointer h-fit pr-2">
            Clear All
          </p>
        </div>
        <SelectComponent />
      </div>
      <div className="min-h-[100vh] grid grid-cols-10 ">
        <div className="col-span-2 relative border-r-2 border-t-2 min-h-full">
          <Sidebar />
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
