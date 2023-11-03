const priceDisplayer = (price, format = 2) => {
  const str = price.toString();
  return price.toString().length <= 3 ? price + ' ₽' : format === 1 ? `${str.slice(0, -3)}.${str.slice(-3)} ₽` : `${str.slice(0, -3)},${str.slice(-3)}.00 ₽`;
}

export default priceDisplayer;