import styles from '../styling/Home.module.css';
import Products from './Products';
import LastSection from './LastSection';
import Footer from './Footer';
import { ColorRing } from 'react-loader-spinner';
import React, { useState, useEffect } from 'react';
import InstantSupport from './InstantSupport';
import { Link } from 'react-router-dom';
import Triangularbutton from '../animated button/Triangularbutton';

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
          <div className="flex justify-center items-center flex-col py-8 bg-red-700 ">
            <div
              className="flex w-[90%] justify-even
            "
            >
              <section className="w-full text- flex flex-col  justify-center ">
                <ul>
                  {/* className='border border-white' */}
                  <li className=" text-white list-disc">
                    Make sure your printer is powered on
                  </li>
                  <li className="mt-2 mb-4 text-white list-disc">
                    {/* Add margin to the third li */}
                    Select Download to install the recommended <br />
                    <span className="">
                      {' '}
                      printer software to complete setup
                    </span>
                  </li>

                  <Link
                    to="/productsetup"
                    //       className="flex mt-3 p-2  items-center gap-2
                    // bg-red-700 text-white   bg-black rounded-md  sm:w-[45%] w-"
                  >
                    {/* <div
                      className="bg-red-700"
                      style={{
                        height: '40px',
                        width: '40px',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '2px',
                      }}
                    >
                      <p style={{ fontSize: '12px' }}>𝐂𝖆𝖓𝖔𝖓</p>
                    </div>
                    <p>𝑪𝑳𝑰𝑪𝑲 𝑯𝑬𝑹𝑬 𝑭𝑶𝑹 𝑺𝑬𝑻𝑼𝑷</p> */}
                    <Triangularbutton />
                  </Link>
                </ul>
              </section>
              <section className="hidden md:block p-5">
                {/* Hide on mobile devices */}
                <img
                  src="https://i.ibb.co/TwhCcys/printer-Image-removebg-preview.png"
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
