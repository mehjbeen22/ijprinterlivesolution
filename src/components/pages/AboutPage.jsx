import { ColorRing } from 'react-loader-spinner';
import { useState, useEffect } from 'react';
import LastSection from '../sections/LastSection';
import Footer from '../sections/Footer';

export default function AboutPage() {
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
          <div className="flex justify-center items-center flex-col px-10 py-8">
            <h1 className="text-center text-5xl text-red-500 mb-4 ">
              About Us{' '}
            </h1>

            <div className="aboutContainer flex  border-2 border-red-200 w-full shadow-md border border-gray-200 rounded-sm">
              <section className="w-full p-5">
                <h2 className="text-4xl text-red-600 ">Welcome</h2>
                <p className=" mt-3">
                  ijprintersolutionLive is a online Printer Store & solutions.
                  We are an online convenience printer store dedicated to YOU!
                  Our aim is to give you access to quality products printers and
                  solutions without wasting any time or energy. At
                  ijstartprinter, we promise to provide unique, affordable, and
                  easy printing solutions.
                  <br />
                  <br />
                  ijprintersolutionLive is one of a kind website designed while
                  keeping in mind your daily printing needs. We cater to the
                  printing needs of everyone who has a printing job at hand!
                </p>
              </section>

              <section className="w-full p-5">
                <img
                  src="https://ijstartprinter.com/images/ab.jpg"
                  alt=""
                  className="w-full"
                />
              </section>
            </div>
          </div>

          <LastSection />
          <Footer />
        </>
      )}
    </>
  );
}
