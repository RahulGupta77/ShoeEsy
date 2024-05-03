import { Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import CardPlaceHolder from "../../Skeleton/CardPlaceHolder";
import { backendConfig } from "../../config";
import { fetchCart } from "../../utility/CartMethods";
import {
  sidebarFilterFunction,
  sortByFilter,
} from "../../utility/ProductPageMethods";
import { clearAll, updateCurrentPaginationPage } from "../redux/filterSlice";
import PaginationBtns from "./PaginationBtns";
import ProductCards from "./ProductCards/ProductCards";
import ProductPageFilterPills from "./ProductPageFilterPills";
import SelectComponent from "./SelectComponent";
import Sidebar from "./Sidebar/Sidebar";

const ProductPage = () => {
  const dispatch = useDispatch();
  const productFilter = useSelector((store) => store.productFilter);
  const {searchQueryText} = useSelector(store=> store.userDetails);
  const { isLoggedIn, userInfo, cartItemsSize } = useSelector(
    (store) => store.userDetails
  );
  const {
    categoryFilter,
    brandFilter,
    finalPrice,
    currentRating,
    sortBy,
    currentPaginationPage,
  } = productFilter;

  const [products, setProducts] = useState([]);
  const [sidebarFilterProducts, setSideBarFilterProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [paginationButtonCount, setPaginationButtonCount] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    sidebarFilterFunction(
      categoryFilter,
      brandFilter,
      currentRating,
      finalPrice,
      products,
      setFilteredProducts,
      setSideBarFilterProducts
    );
  }, [
    categoryFilter,
    products,
    brandFilter,
    sortBy,
    currentRating,
    finalPrice,
  ]);

  useEffect(() => {
    sortByFilter(sortBy, sidebarFilterProducts, setFilteredProducts);
  }, [sidebarFilterProducts, sortBy]);

  useEffect(() => {
    if (filteredProducts) {
      const totalButtons = Math.ceil(filteredProducts.length / 12);
      setPaginationButtonCount(totalButtons);
      dispatch(updateCurrentPaginationPage(1));
    }
  }, [filteredProducts, dispatch]);

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

    if (isLoggedIn) {
      const fetchCartItems = async () => {
        const cartData = await fetchCart(userInfo.token);
        setCartItems(cartData);
      };

      fetchCartItems();
    }

    fetchProducts();
  }, [isLoggedIn, userInfo, cartItemsSize]);

  useEffect(()=>{
    console.log(searchQueryText);
  }, [searchQueryText])

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
          <ProductPageFilterPills />
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
            {filteredProducts ? (
              filteredProducts.length !== 0 ? (
                <>
                  {filteredProducts
                    .slice(
                      currentPaginationPage * 12 - 12,
                      currentPaginationPage * 12
                    )
                    .map((product) => (
                      <ProductCards
                        key={product["_id"]}
                        product={product}
                        isLoggedIn={isLoggedIn}
                        token={userInfo.token}
                        cartItems={cartItems}
                      />
                    ))}
                </>
              ) : (
                <div className="col-span-12 mt-16">
                  <Typography variant="h1" color="pink">
                    No Products Found :(
                  </Typography>
                </div>
              )
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
          {paginationButtonCount !== 0 && (
            <div className="mt-8 border-t-2 pt-10 pb-5">
              <PaginationBtns totalButtons={paginationButtonCount} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
