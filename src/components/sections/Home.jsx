import styles from '../styling/Home.module.css';
import Products from './Products';
import LastSection from './LastSection';
import Footer from './Footer';
import { ColorRing } from 'react-loader-spinner';
import React, { useState, useEffect } from 'react';
import InstantSupport from './InstantSupport';
import { Link } from 'react-router-dom';

export default function Home() {
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
        <div className="flex justify-center items-center h-96">
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
          <div className="flex justify-center items-center flex-col py-8">
            <div className="aboutContainer flex w-full shadow-md border border-gray-200 rounded-sm">
              <section className="w-full p-5 text-center flex flex-col justify-center items-center">
                {/* Align text at left */}
                <h2 className="md:text-4xl text-3xl italic text-red-700">
                  ijprinter solution setup
                </h2>
                {/* Smaller heading */}
                <li className="mt-5">Make sure your printer is powered on</li>
                <li className="mt-3 ml-3">
                  {/* Add margin to the third li */}
                  Select Download to install the recommended <br />
                  printer software to complete setup
                </li>

                <Link
                  to="/productsetup"
                  className="flex mt-5 gap-2 p-3 font-medium items-center gap-1 
              bg-red-700 text-white list-none py-2 bg-red-600 rounded-md"
                >
                  <p>CLICK HERE FOR SETUP</p>
                </Link>
              </section>

              <section className="hidden md:block p-5">
                {/* Hide on mobile devices */}
                <img
                  src="https://m.media-amazon.com/images/I/81PtstjRtSL._AC_UF1000,1000_QL80_.jpg"
                  alt=""
                  style={{ height: '100%', width: '100%' }}
                />
              </section>
            </div>
          </div>
          <InstantSupport />
          <Products />
          <LastSection />
          <Footer />
        </>
      )}
    </>
  );
}
