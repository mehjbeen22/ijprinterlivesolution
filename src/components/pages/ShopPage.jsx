import React from 'react';
import Products from '../sections/Products';
import { height, width } from '@mui/system';
import LastSection from '../sections/LastSection';
const ShopPage = () => {
  return (
    <>
      <div style={style}></div>
      <Products />
    </>
  );
};

export default ShopPage;

const style = {
  backgroundImage:
    "url('https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/08/featured-25.png?fit=600%2C300&ssl=1')",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '400px',
};
