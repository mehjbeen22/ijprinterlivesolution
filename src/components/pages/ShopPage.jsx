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
  backgroundImage: "url('https://ijprintersolution.com/images/bg.jpg')",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '400px',
};
