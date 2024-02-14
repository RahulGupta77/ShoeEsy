import { getCurrentRoute } from "./redux/navbarSlice";

export const handleRouteChangeClick = (route, dispatch) => {
  dispatch(getCurrentRoute(route));
};
