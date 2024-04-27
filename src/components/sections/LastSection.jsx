import React from 'react';
import styles from '../styling/Home.module.css';

const LastSection = () => {
  return (
    <div className={styles.secondLastCase}>
      <div className="flex flex-col md:flex-row gap-4 ">
        {/* ---------------------------FIRST BOX ---------------- */}

        <div className="bg-white border border-gray-300 flex flex-col justify-center items-center p-4 md:flex-row">
          <section className="text-center md:text-left md:mr-4">
            <p className="text-red-500 text-lg mb-2">
              Waste-free, easy and secure.
            </p>
            <h2 className="text-3xl font-semibold mb-2">Branded Printers</h2>
            <p className="text-gray-500">Sale up to 25% off</p>
          </section>
          <img
            src="https://ijstartprinter.com/images/off1.png"
            alt=""
            className={styles.cardImage}
          />
        </div>
        {/* ---------------------------SECOND BOX ---------------- */}
        <div className="bg-white border border-gray-300 flex flex-col justify-center items-center p-4 md:flex-row">
          <section className="text-center md:text-left md:mr-4">
            <p className="text-red-500 text-lg mb-2">
              Easy Print from any device, anytime
            </p>
            <h2 className="text-3xl font-semibold mb-2">
              Printers & Accessories
            </h2>
            <p className="text-gray-500">Free shipping order over $100</p>
          </section>
          <img
            src="https://ijprintersolution.com/images/off2.png"
            alt=""
            className={styles.cardImage}
          />
        </div>
      </div>
    </div>
  );
};

export default LastSection;
