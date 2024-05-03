import React from 'react';
import Products from '../sections/Products';
import LastSection from '../sections/LastSection';
import Footer from '../sections/Footer';
import { ColorRing } from 'react-loader-spinner';
import { useState, useEffect } from 'react';

const ShopPage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center  h-96">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </div>
      ) : (
        <>
          <div style={style}></div>
          <Products />
          <LastSection />
          <Footer />
        </>
      )}
    </>
  );
};

export default ShopPage;

const style = {
  backgroundImage:
    "url('https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/08/featured-25.png?fit=600%2C300&ssl=1')",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '300px',
};
