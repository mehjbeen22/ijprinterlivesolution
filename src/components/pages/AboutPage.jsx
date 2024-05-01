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
        <div className="bg-gray-50">
          <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="relative isolate overflow-hidden bg-red-500 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
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
                <defs>
                  <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                    <stop stopColor="#7775D6" />
                    <stop offset={1} stopColor="#E935C1" />
                  </radialGradient>
                </defs>
              </svg>
              <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Welcome
                </h2>
                <p className="mt-6 text-lg leading-8 text-white">
                  ijstartprinter is a online Printer Store & solutions. We are
                  an online convenience printer store dedicated to YOU! Our aim
                  is to give you access to quality products printers and
                  solutions without wasting any time or energy. At
                  ijstartprinter, we promise to provide unique, affordable, and
                  easy printing solutions.
                  <br />
                  ijstartprinter is one of a kind website designed while keeping
                  in mind your daily printing needs. We cater to the printing
                  needs of everyone who has a printing job at hand!
                </p>
              </div>
              <div className="relative mt-16 h-80 lg:mt-8">
                <img
                  className="absolute left-0 top-10 w-[40rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                  src="	https://ijstartprinter.com/images/ab.jpg"
                  alt="App screenshot"
                  // width={1824}
                  // height={1080}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
          <LastSection />
          <Footer />
        </div>
      )}
    </>
  );
}
