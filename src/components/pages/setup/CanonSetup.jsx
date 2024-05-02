import { Link } from 'react-router-dom';
import DownloadIcon from '@mui/icons-material/Download';

const CanonSetup = () => {
  return (
    <div className="flex justify-center items-center flex-col py-8">
      <div className=" aboutContainer flex w-full flex-col bg-white">
        <div className="flex justify-between items-center">
          <img
            src="https://www.cla.canon.com/sys/images/canon_main_logo.gif"
            className="h-10 w-auto ml-10 text-2xl italic text-red-700 font-medium"
          />
        </div>

        <div className="border border-green-600 p-5">
          <Link
            to="/productsetup"
            className="border-1 border-black focus:ring-2 focus:ring-white focus:outline-none font-medium rounded-lg text-sm p-2 w-[25%] mt-4"
          >
            🔙 Back to setup Product Page
          </Link>
          <div className="bg-gray-200  px-4 py-4 mt-8">
            <h3 className="text-3xl font-bold  mb-2 ">Setup Windows</h3>
          </div>
          <div className="pl-14 m-2 pt-8">
            {' '}
            <span className="text-2xl font-bold border-l-8 p-1 border-x-red-700 mt-12 ">
              Setup
            </span>
            <p className="text-gray-700 text-lg mt-4">
              Click Download to start setup. <br />
              Follow the on-screen instructions to complete the setup.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="rounded-md border  flex mt-8 justify-around text-3xl p-3 text-gray-500 bg-gray-100 ">
              <DownloadIcon style={{ fontSize: 40 }} />{' '}
              {/* Increasing the size */}
              <div className=" font-bold  rounded  focus:outline-none">
                Download
              </div>
            </div>
          </div>

          <p className=" border-t border-gray-300 text-center mt-9 text-gray-500">
            Notes on Site Usage and Cookies | CANON INC. 2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default CanonSetup;
