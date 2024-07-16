import React from "react";
import { ColorRing } from "react-loader-spinner";
import { useState, useEffect } from "react";
import Footer from "../sections/Footer";

const Disclaimer = () => {
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
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      ) : (
        <>
          <div style={style}></div>
          <h1 className="text-center text-6xl text-red-500 m-5">Disclaimer</h1>
          <div className="p-16">
            <div className="flex justify-center flex-col p-5 shadow-md border border-gray-200 rounded-sm">
              <h3 className="text-2xl m-2">Disclaimer</h3>
              <p className="text-l m-3">
                If you require any more information or have any questions about
                our site’s disclaimer, please feel free to contact us by email
                at support@ijstartprinter.us.
              </p>

              <h3 className="text-2xl m-2">
                Disclaimers for ijstartprinter.com
              </h3>
              <p className="text-l m-3">
                All the information on this website – https://ijstartprinter.com
                – is published in good faith and for general information purpose
                only. ijstartprinter does not make any warranties about the
                completeness, reliability and accuracy of this information. Any
                action you take upon the information you find on this website
                (ijstartprinter), is strictly at your own risk. ijstartprinter
                will not be liable for any losses and/or damages in connection
                with the use of our website. From our website, you can visit
                other websites by following hyperlinks to such external sites.
                While we strive to provide only quality links to useful and
                ethical websites, we have no control over the content and nature
                of these sites. These links to other websites do not imply a
                recommendation for all the content found on these sites. Site
                owners and content may change without notice and may occur
                before we have the opportunity to remove a link which may have
                gone 'bad'. Please be also aware that when you leave our
                website, other sites may have different privacy policies and
                terms which are beyond our control. Please be sure to check the
                Privacy Policies of these sites as well as their “Terms of
                Service” before engaging in any business or uploading any
                information.
              </p>

              <h3 className="text-2xl m-2">Consent</h3>
              <p className="text-l m-3">
                By using our website, you hereby consent to our disclaimer and
                agree to its terms.
              </p>

              <h3 className="text-2xl m-2">Update</h3>
              <p className="text-l m-3">
                Should we update, amend or make any changes to this document,
                those changes will be prominently posted here.
              </p>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Disclaimer;

// .................................. DATA  ........................................
const style = {
  backgroundImage:
    "url('https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/08/featured-25.png?fit=600%2C300&ssl=1')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "200px",
};
