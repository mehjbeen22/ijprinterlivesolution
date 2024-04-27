import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Home', link: '/', current: true },
  { name: 'About', link: '/about', current: false },
  { name: 'Shop', link: '/shop', current: false },
  { name: "Faq's", link: '/faqs', current: false },
  { name: 'Contact', link: '/contact', current: false },
];

// const navigation = [
//   { name: 'Home', href: '/', current: true },
//   { name: 'About', href: '/about', current: false },
//   { name: 'Shop', href: '/shop', current: false },
//   { name: "Faq's", href: '/faqs', current: false },
//   { name: 'Contact', href: '/contact', current: false },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavigationBar() {
  const location = useLocation();

  return (
    <Disclosure
      as="nav"
      className="bg-gray-50"
      style={{
        borderBottom: '2px solid red',
        boxShadow:
          'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
      }}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            {/* border-2 border-red-300 */}
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-10 w-auto"
                    src="https://i.ibb.co/4SYYZ75/Screenshot-2024-04-26-194846.png"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-auto sm:block ">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        to={item.link}
                        key={item.name}
                        className={`px-3 py-2 font-medium ${
                          location.pathname === item.link ||
                          (item.current && location.pathname === '/')
                            ? 'border-b-2 border-red-500'
                            : 'hover:border-red-500'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  className={classNames(
                    item.current
                      ? 'bg-red-500 text-white'
                      : 'text-current hover:bg-gray-500 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <Link to={item.link} className="block w-full h-full">
                    {item.name}
                  </Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
