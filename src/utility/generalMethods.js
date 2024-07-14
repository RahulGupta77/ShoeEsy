export  const shortenBrandNameString = (str) => {
  if (str.length > 22) {
    return str.slice(0, 22) + "...";
  } else {
    return str;
  }
};