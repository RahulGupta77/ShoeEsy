import toast from "react-hot-toast";
import { backendConfig } from "../config";

export const fetchCart = async (token) => {
  if (!token) return;

  try {
    const response = await fetch(backendConfig.endpoint + "/cart", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    const data = await response.json();

    return data;
  } catch (e) {
    if (e.response && e.response.status === 400) {
      toast.error(e.response.data.message);
    } else {
      toast.error(
        "Could not fetch cart details. Check that the backend is running, reachable and returns valid JSON."
      );
    }
    return null;
  }
};

export const updateCartOnServer = async (productId, qty, token) => {
  const cartData = {
    productId: productId,
    qty: qty,
  };

  try {
    const response = await fetch(backendConfig.endpoint + "/cart", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartData),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const isItemInCart = (cartItems, productId) => {
  const searchedItem = cartItems.find((item) => item.productId === productId);

  if (searchedItem) return true;
  return false;
};
