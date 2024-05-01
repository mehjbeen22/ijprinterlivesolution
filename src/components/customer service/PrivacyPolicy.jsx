const PrivacyPolicies = [
  {
    id: 1,
    heading: 'Privacy Policy',
    desc: `123-printerlivesolution.com website is owned by 123Setup, which is a data controller of your personal data.
We have adopted this Privacy Policy, which determines how we are processing the information collected by 123-printerlivesolution.com, which also provides the reasons why we must collect certain personal data about you. Therefore, you must read this Privacy Policy before using 123-printerlivesolution.com website.

We take care of your personal data and undertake to guarantee its confidentiality and security.`,
  },

  {
    id: 2,
    heading: 'Personal information we collect: ',
    desc: `When you visit the123-printerlivesolution.com, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the installed cookies on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products you view, what websites or search terms referred you to the Site, and how you interact with the Site. We refer to this automatically-collected information as “Device Information.” Moreover, we might collect the personal data you provide to us (including but not limited to Name, Surname, Address, payment information, etc.) during registration to be able to fulfill the agreement.`,
  },
  {
    id: 3,
    heading: 'Why do we process your data? ',
    desc: `Our top priority is customer data security, and, as such, we may process only minimal user data, only as much as it is absolutely necessary to maintain the website. Information collected automatically is used only to identify potential cases of abuse and establish statistical information regarding website usage. This statistical information is not otherwise aggregated in such a way that it would identify any particular user of the system.

You can visit the website without telling us who you are or revealing any information, by which someone could identify you as a specific, identifiable individual. If, however, you wish to use some of the website’s features, or you wish to receive our newsletter or provide other details by filling a form, you may provide personal data to us, such as your email, first name, last name, city of residence, organization, telephone number. You can choose not to provide us with your personal data, but then you may not be able to take advantage of some of the website’s features. For example, you won’t be able to receive our Newsletter or contact us directly from the website. Users who are uncertain about what information is mandatory are welcome to contact us.`,
  },
  {
    id: 4,
    heading: ' Links to other websites:',
    desc: `Our website may contain links to other websites that are not owned or controlled by us. Please be aware that we are not responsible for such other websites or third parties privacy practices. We encourage you to be aware when you leave our website and read the privacy statements of each website that may collect personal information.`,
  },
  {
    id: 5,
    heading: 'Information security:',
    desc: `We secure information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure. We keep reasonable administrative, technical, and physical safeguards to protect against unauthorized access, use, modification, and personal data disclosure in its control and custody. However, no data transmission over the Internet or wireless network can be guaranteed.`,
  },
  {
    id: 6,
    heading: 'Legal disclosure:',
    desc: `We will disclose any information we collect, use or receive if required or permitted by law, such as to comply with a subpoena or similar legal process, and when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.`,
  },
  {
    id: 7,
    heading: 'Contact information:',
    desc: `If you would like to contact us to understand more about this Policy or wish to contact us concerning any matter relating to individual rights and your Personal Information, you may send an email to 123-printerlivesolution.com`,
  },
];

import { ColorRing } from 'react-loader-spinner';
import { useState, useEffect } from 'react';
import Footer from '../sections/Footer';

const PrivacyPolicy = () => {
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
        <>
          <div style={style}></div>
          <h1 className="text-center text-6xl text-red-500 m-5">
            Privacy Policy
          </h1>
          <div className="p-16">
            <div className="flex justify-center flex-col p-5 shadow-md border border-gray-200 rounded-sm">
              {PrivacyPolicies.map(({ id, heading, desc }) => {
                return (
                  <div key={id}>
                    <h3 className="text-2xl m-2">{heading}</h3>
                    <p className="text-l m-3">{desc}</p>
                  </div>
                );
              })}

              <h3 className="text-2xl m-2">Your rights</h3>
              <p className="text-l m-3">
                If you are a European resident, you have the following rights
                related to your personal data:
              </p>

              <p className="text-l m-1">👉 The right to be informed.</p>
              <p className="text-l m-1">👉 The right of access.</p>
              <p className="text-l m-1">👉 The right to rectification.</p>
              <p className="text-l m-1">👉 The right to erasure.</p>
              <p className="text-l m-1">👉 The right to restrict processing.</p>
              <p className="text-l m-1">👉 The right to data portability.</p>
              <p className="text-l m-1">👉 The right to object.</p>
              <p className="text-l m-1">
                👉 Rights in relation to automated decision-making and
                profiling.
              </p>
              <p className="text-l m-3">
                If you would like to exercise this right, please contact us
                through the contact information below.
              </p>

              <p className="text-l m-3">
                Additionally, if you are a European resident, we note that we
                are processing your information in order to fulfill contracts we
                might have with you (for example, if you make an order through
                the Site), or otherwise to pursue our legitimate business
                interests listed above. Additionally, please note that your
                information might be transferred outside of Europe, including
                Canada and the United States.
              </p>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default PrivacyPolicy;

const style = {
  backgroundImage:
    "url('https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/08/featured-25.png?fit=600%2C300&ssl=1')",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '200px',
};
