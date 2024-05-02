import { Link } from 'react-router-dom';

const SetupProduct = () => {
  return (
    <div className="flex flex-col justify-between  mx-auto  max-w-4xl sm:mt-10 shadow-md p-2 border border-gray-200 rounded-sm ">
      <Link
        to="/"
        className=" hover:bg-black hover:text-white focus:ring-2 focus:ring-white focus:outline-none font-medium rounded-lg text-sm p-2 w-[10%] self-end"
      >
        Home
      </Link>
      <h1 className="text-3xl font-bold text-red-700 ml-10">
        Select Product Name
      </h1>

      <div className="flex flex-col items-center px-4 py-8 space-y-4">
        <p className="text-center text-lg">
          Search for your product name or select from the list.
        </p>
        <div className="flex flex-row justify-center items-center w-full">
          <input
            type="text"
            placeholder="Example: TS9030"
            className=" border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <Link
            to="/canonsetup"
            className="hover:bg-red-600 bg-black text-white  font-medium  text-md px-3 py-2.5 text-center ml-2"
          >
            Go
          </Link>
        </div>
        <p className="text-base text-blue-400 underline">
          Where to find your product name
        </p>
      </div>
      <div className="flex flex-col space-y-2 px-4 pb-4">
        <h2 className="text-lg font-bold text-white">Product Series</h2>
        <ul className="list-none space-y-1">
          {product_series.map((series, index) => {
            return (
              <li
                key={index}
                className="border-2 border-grey-200 ocus:ring-2 focus:ring-white focus:outline-none font-medium rounded-lg p-2 m-2"
              >
                {`➕   ${series}`}
              </li>
            );
          })}
        </ul>

        <select name="operaValues" className="w-[20%] border-2 border ">
          {opareaValues.map((lang, index) => (
            <option key={index}>{lang}</option>
          ))}
        </select>
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
