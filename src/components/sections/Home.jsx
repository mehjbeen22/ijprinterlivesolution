import styles from '../styling/Home.module.css';
import Products from './Products';
import LastSection from './LastSection';
import Footer from './Footer';
import { ColorRing } from 'react-loader-spinner';
import React, { useState, useEffect } from 'react';

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
            height={80}
            width={80}
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClassName="color-ring-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </div>
      ) : (
        <>
          <div className={`${styles.homeContainer}`}>
            <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
              <div className="relative isolate overflow-hidden px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                <svg
                  viewBox="0 0 1024 1024"
                  className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                  aria-hidden="true"
                >
                  <circle
                    cx={512}
                    cy={512}
                    r={512}
                    fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                    fillOpacity="0.7"
                  />
                </svg>

                <div className="mx-auto text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-center">
                  <h2 className=" font-bold text-white sm:text-4xl  overflow-wrap break-word sm:text-center tracking-wider">
                    <span className="text-5xl">Effortless Printing</span> <br />
                    <span className="mt-4  text-3xl">
                      Seamless Connectivity
                    </span>
                  </h2>

                  <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-center">
                    <a
                      href="#"
                      className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-red-500 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                    >
                      SHOP NOW
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Products />
          <LastSection />
          <Footer />
        </>
      )}
    </>
  );
}
