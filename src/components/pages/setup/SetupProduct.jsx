import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { printer_series } from './data';
import { ScrollView } from '@aws-amplify/ui-react';

const SetupProduct = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showError, setShowError] = useState(false);
  const [hideScrollOnClick, sethideScrollOnClick] = useState(true);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleShowError = () => {
    setShowError(!showError);
  };

  const filteredPrinterSeries = printer_series.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const showScrollView = searchTerm && filteredPrinterSeries.length > 0;

  const selectItem = (item) => {
    setSearchTerm(item);
    sethideScrollOnClick(false);
  };

  return (
    <div className="flex flex-col justify-between mx-auto max-w-4xl sm:mt-10 shadow-md p-2 border border-gray-200 rounded-sm ">
      <Link
        to="/"
        className="border-1 border-black focus:ring-2 focus:ring-white focus:outline-none font-medium rounded-lg text-sm
         p-2 w-[10%] self-end text-center"
      >
        🔙 Home
      </Link>
      <h1 className="text-2xl font-bold text-black py-2 pl-6 mt-4 bg-[#d9d9d9] border-1 border-[#d9d9d9]">
        Select Product Name
      </h1>

      <div className="flex flex-col items-center px-4 py-8 space-y-4">
        <p className="text-center text-lg mb-2">
          Search for your product name or select from the list.
        </p>
        <div
          className="flex flex-col justify-center py-12 items-center
         w-full bg-gray-200 border-1 border-[#d9d9d9] relative"
        >
          {showError && (
            <p className="text-red-500">
              Could not find the product. Enter the product name correctly.
            </p>
          )}

          <div className="  flex justify-center w-full items-center">
            <div className=" w-[50%] ">
              <input
                type="text"
                placeholder="Example: TS9030"
                className="border border-gray-300 w-full
               focus:outline-none focus:ring-1 focus:ring-black p-1 rounded-sm"
                value={searchTerm}
                onChange={handleSearch}
              />
              <div className=" absolute bg-white">
                {hideScrollOnClick && showScrollView && (
                  <ScrollView
                    height="150px"
                    width="410px"
                    border="1px solid #cbd5e1"
                    className="autocomplete-items"
                  >
                    {filteredPrinterSeries.map((item) => (
                      <div key={item} onClick={() => selectItem(item)}>
                        <h3 className="hover:bg-gray-300">{item}</h3>
                      </div>
                    ))}
                  </ScrollView>
                )}
              </div>
            </div>

            <Link
              to={showScrollView ? '/canonsetup' : '/productsetup'}
              className="hover:bg-red-600 bg-black w-10 text-white font-medium text-md text-center
               ml-2 p-1"
              onClick={handleShowError}
            >
              Go
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-2 px-4 pb-4">
        <h2 className="text-lg font-bold text-white">Product Series</h2>
        <ul className="list-none space-y-1">
          {product_series.map((series, index) => {
            return (
              <li
                key={index}
                className="border-2 border-grey-200 focus:ring-2 focus:ring-white focus:outline-none font-medium rounded-lg p-2 m-2 font-bold  text-black"
              >
                {`➕   ${series}`}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SetupProduct;

const product_series = [
  'E series',
  'G series',
  'GM series',
  'GP series',
  'GX series',
  'iB series',
  'iP series',
  'iX series',
  'LiDE series',
  'MB series',
  'MG series',
  'MX series',
  'PRO series',
  'TA series',
  'TC series',
  'TM series',
  'TR series',
  'TS series',
  'TX series',
  'TZ series',
];

const opareaValues = [
  'U.S.A.',
  'Japan',
  'Canada',
  'Latin America',
  'Europe',
  'Middle East',
  'China',
  'Korea',
  'Hong Kong',
  'Taiwan',
  'Asia (Other)',
  'Oceania',
];
