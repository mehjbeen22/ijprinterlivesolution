import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import styles from '../styling/Home.module.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className={styles.container}>
      {/* "container pt-20 " */}
      <div className="w3l-middlefooter-sec bg-current p-6  ">
        <div className="container py-md-5 py-sm-4 py-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
            <div className="footer-grids  text-white ">
              <h3 className=" font-bold mb-3">Quick Links</h3>
              <ul>
                <li className="mb-3">
                  <a href="#">Home</a>
                </li>
                <li className="mb-3">
                  <Link to="/about">About us</Link>
                </li>
                <li className="mb-3">
                  <Link
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                  >
                    Login
                  </Link>
                </li>

                <li className="mb-3">
                  <Link
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Register{' '}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-grids text-white  sm:mt-0">
              <h3 className="text-white font-bold mb-3">Customer Service</h3>
              <ul>
                <li className="mb-3">
                  <Link to="/disclaimer">Disclaimer</Link>
                </li>
                <li className="mb-3">
                  <Link to="/privacypolicy">Privacy Policy</Link>
                </li>
                <li className="mb-3">
                  <Link to="/refundandreturn">Refund and Return Policy</Link>
                </li>
                <li className="mb-3">
                  <Link to="/t&c">Terms and Conditions</Link>
                </li>
              </ul>
            </div>
            <div className="footer-grids  sm:mt-0">
              <h3 className="text-white font-bold mb-3">Get in Touch</h3>
              <ul className="text-white">
                <li className="mb-3 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#FF0000"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  89 Woodland Center, USA
                </li>

                <li className="mb-3 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FF0000"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="black"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                  +(1) 888-291-3059
                </li>
                <li className="mb-3 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FF0000"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="black"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                    />
                  </svg>

                  <a href="mailto:support@ijprintersolution.com">
                    support@ijprinterlivesolution.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-grids  sm:mt-0">
              <h3 className="text-white font-bold mb-3">Newsletter</h3>
              <p className="mb-3 text-white">
                Free Delivery on your first order!
              </p>
              <form action="#" method="post">
                <div className="form-group flex ">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required=""
                    className="min-w-0  px-3.5 py-2  outline-none sm:text-sm sm:leading-6"
                  />
                  <button
                    className="text-white px-3 py-2 ml-1.5"
                    style={{ backgroundColor: '#737373' }}
                  >
                    GO
                  </button>
                </div>
              </form>

              <div className="footer-grids w3l-socialmk mt-3">
                <h3 className="text-white font-bold mb-3 text-2xl">
                  Follow Us on
                </h3>
                <div className="social">
                  <ul className="flex gap-4">
                    <li>
                      <FacebookRoundedIcon
                        style={{ color: '#6788ce', fontSize: '2.5rem' }}
                      />
                    </li>
                    <li>
                      <TwitterIcon
                        style={{ color: '#00acee', fontSize: '2.5rem' }}
                      />
                    </li>
                    <li>
                      <GoogleIcon
                        style={{ color: '#dd4b39', fontSize: '2.5rem' }}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* last Footer */}
      <div className="p-4 bg-red-700">
        <div className="container mx-auto">
          <p className="text-center text-white text-lg">
            © {new Date().getFullYear()} ij printersolutionLive Store. All
            rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
