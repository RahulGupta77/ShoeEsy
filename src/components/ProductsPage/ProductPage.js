import { Chip } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import CardPlaceHolder from "../../Skeleton/CardPlaceHolder";
import { backendConfig } from "../../config";
import { clearAll, updateCategoryBrandFilter } from "../redux/filterSlice";
import ProductCards from "./ProductCards/ProductCards";
import SelectComponent from "./SelectComponent";
import Sidebar from "./Sidebar/Sidebar";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { categoryAndBrandFilter, finalPrice, currentRating } = useSelector(
    (store) => store.productFilter
  );

  const [products, setProducts] = useState(null);

  useEffect(() => {
    console.log("Filtering Products");
  }, [finalPrice, currentRating]);

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
      <div className="grid grid-cols-10 text-[#394b53]">
        <div className="col-span-2 px-3 pt-2  font-bold uppercase flex justify-between items-center">
          <p className="text-md">Filters</p>
          <p
            onClick={() => dispatch(clearAll())}
            className="text-sm text-[#ed4f7a] cursor-pointer h-fit "
          >
            Clear All
          </p>
        </div>
        <div className="col-span-6 px-4 pt-2 flex flex-wrap gap-2 items-center ">
          {categoryAndBrandFilter.map((filterPill) => (
            <Chip
              key={filterPill + " pill"}
              variant="outlined"
              className="rounded-full"
              color="pink"
              open={true}
              animate={{
                mount: { y: 0 },
                unmount: { y: 20 },
              }}
              value={filterPill}
              onClose={() => {
                dispatch(updateCategoryBrandFilter(filterPill));
              }}
            />
          ))}
        </div>
        <div className="col-span-2 ">
          <SelectComponent />
        </div>
      </div>
      <div className="min-h-[100vh] mt-2 grid grid-cols-10 ">
        <div className="col-span-2 relative border-r-2 border-t-2 min-h-full">
          <Sidebar />
        </div>
        <div className="col-span-8 p-5  pt-0 border-t-2 min-h-full">
          <div className="grid grid-cols-12 col-span-12 px-5 place-items-center">
            {products ? (
              <>
                {products.slice(0, 33).map((product) => (
                  <ProductCards key={product._id} product={product} />
                ))}
              </>
            ) : (
              [...Array(12).keys()].map((_, index) => {
                return (
                  <div className="col-span-3 p-5" key={index}>
                    <CardPlaceHolder />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
