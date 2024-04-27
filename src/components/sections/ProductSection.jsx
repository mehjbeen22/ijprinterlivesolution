import React from 'react';

const ProductSection = () => {
  return (
    <div
      className=" border-2 border-greenyellow flex justify-evenly flex-col md:flex-row relative"
      style={{ backgroundColor: '#ff0000' }}
    >
      <div className="left flex justify-center items-center flex-col md:w-1/2">
        <h1 className="head font-open-sans text-white text-5xl font-semibold tracking-wide">
          Summer <br /> Carnival
        </h1>
        <h3
          className="head2 text-red-900 font-open-sans text-3xl leading-7 hidden md:block transform absolute right-0 top-1/2 -translate-y-1/2 md:text-2xl md:right-1/2 md:left-auto md:top-auto md:transform-none"
          style={{
            transform: 'rotate(-64deg)',
            position: 'absolute',
            right: '50%',
            fontWeight: '800',
            fontSize: '2rem',
          }}
        >
          {' '}
          Get Extra 10% off
        </h3>
      </div>
      <div className="right md:w-1/2">
        <img
          src="https://ijstartprinter.com/images/image1.png"
          className="img h-80 w-full md:w-500"
          alt=""
        />
      </div>
    </div>
  );
};

export default ProductSection;
