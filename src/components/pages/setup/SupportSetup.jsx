import React, { useEffect, useState } from 'react';
import { Audio } from 'react-loader-spinner';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

function SupportSetup() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 15000);
  }, []);

  return (
    <>
      <div className="flex justify-center items-center flex-col py-8 ">
        {show ? (
          <main className="aboutContainer flex w-full h-[90vh] lg:w-[60%] flex-col bg-white justify-center  items-center ">
            <section className="flex justify-between items-center mt-4 sm:gap-4">
              <div className="flex-none w-24 h-24">
                <img
                  src="https://i.ibb.co/y82fyp6/Canon-Image-Red-round-removebg-preview-1.png"
                  alt="Canon Image"
                  className="w-full h-full"
                />
              </div>

              <div className="flex-none w-32 h-32">
                <Audio
                  height={100}
                  width={150} // Increased width
                  color="#f47e60" // Custom colors
                  ariaLabel="audio-loading"
                  wrapperStyle={{}}
                  wrapperClass="wrapper-class"
                  visible={true}
                />
              </div>

              <div className="flex-none w-40 h-40">
                <img
                  src="https://i.ibb.co/my8TYYs/Printer-Red-Round-removebg-preview.png"
                  alt="Printer Image"
                  className="w-full h-full"
                />
              </div>
            </section>

            <Stack
              sx={{
                width: '50%',
                color: 'grey.500',
                marginTop: '30px',
              }}
              spacing={2}
            >
              <LinearProgress color="success" sx={{ height: '15px' }} />
            </Stack>
          </main>
        ) : (
          <div
            style={{
              // border: '2px solid',
              height: '90vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src="https://i.ibb.co/3m9JVTG/error-image-Photoroom.png"
              alt=""
              className="flex w-full lg:w-[80%] "
            />
          </div>
        )}
      </div>
    </>
  );
}

export default SupportSetup;
