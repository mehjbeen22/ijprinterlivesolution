const PrinterOffline = () => {
  return (
    <main className="flex justify-center items-center p-5 mt-20 text-[#292524]">
      <div className="flex flex-col ">
        <h1 className="text-4xl mb-2 text-gary-600 font-semibold text-center p-2">
          Printer Offline
        </h1>
        <section className=" w-[95%] p-5  ">
          {printerSetupContent.map((item) => (
            <div key={item.id} className="my-8">
              <h2 className="text-2xl font-bold mb-4">{item.head}</h2>
              {item.description && (
                <p className="text-lg mb-4">{item.description}</p>
              )}
              <ul className="list-disc pl-6">
                {item.points.map((point, index) => (
                  <li key={index} className="text-base mb-2">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default PrinterOffline;

const printerSetupContent = [
  {
    id: 1,
    head: "Why is My Printer not Connected to the Internet? What are the Steps to Connect a Printer to Wifi?",
    description:
      "Here are some steps that you can check to connect your Printer to the internet or your home Wifi connection. But if the problem doesn’t get resolved even after following the given steps, you can take our support and leave us a message to resolve your issue with our experts.",
    points: [
      "If your wireless printer setup fails to connect with your internet, you can check for network issues and review setup requirements.",
      "Check the network connection: move your Printer and mobile device or computer closer to the wired or wireless router, and then check the signal quality. Try to open a website and check whether the internet connection is working properly or not. If your Wi-Fi is intermittent or slow, try to restart the router by unplugging the power cord. After that, please wait for at least 15 seconds and then reconnect it.",
      "How to fix the printer sleep mode issue? If you want to know how to set up the Printer, especially if it is facing a sleep mode issue, you need to touch the printer touchscreen or press the Power button to wake up your Printer and put it in a ready state.",
      "Restore the wireless connection or restart your Printer to identify and fix network issues.",
      "If your Printer includes a light next to a wireless button or icon, ensure that the light is on.",
      "Check the wireless setting and make sure that the signal is turned on.",
      "Based on your printer model, search the customer support and then check for a self-test page to find the document on how to print and calculate the report.",
    ],
  },
  {
    id: 2,
    head: "What Type of Query Do You Have ?",
    description:
      "If you want to know the answer to any of the above questions, you can connect with us to get professional assistance. Moreover, if you wish to know your Printer’s wifi settings and are excited to learn the steps to install a printer or want to fix internet issues while connecting your Printer to Wifi, we ensure to help you faster and easier to resolve your issue.",
    points: [
      "How to set up a printer?",
      "How to connect a printer to wifi?",
      "How to fix the printer sleep mode issue?",
      "How to set up printers on windows?",
      "How to set up printers on mac?",
      "How do I install a printer?",
      "What are the steps for setting up a wireless printer?",
      "How to connect an HP printer to new wifi?",
      "What are my printer wifi settings?",
    ],
  },
  {
    id: 3,
    head: "How Can Smart Device Assistant Assist You?",

    points: [
      "At Smart  Device Assistant , we have an experienced team who can guide you on printer troubleshooting and provide you with instant support to fix some common challenges that you face while working or connecting your printer with an internet connection, laptop, computer, mobile, and other devices.",

      "If you want to resolve your query within a few minutes and want professional help for free, you can send us a message to start a conversation with our experts or drop your query to get the best solution.",
      "Moreover, if you have just bought a brand new Printer from the market, regardless of its type and size, we ensure to address all your problems without any hassle.",
    ],
  },
  {
    id: 4,
    head: "Why Is My Printer Not Connecting to Wi-Fi During Setup?",
    description: ` Are you trying to connect your printer to local Wi-Fi but don’t know how to get this step done? Below, we will discuss some reasons that you check why your printer may not connect to wi-fi during setup. 
      These are some basic steps that people always follow when they fail to connect 123 printer setup or any other printing device with Wi-Fi. However, if you want to solve your printer related query with experts or are interested in learning the complete steps to install a printer in Windows/Mac and want to fix the most common printer problems in Windows 7, Windows 8.1, and Windows 10, you can send us a message with your query. We ensure to help you connect with our specialized printer support team and provide faster assistance.`,
    points: [
      "If you have recently changed your network security, your printer won’t connect to Wi-Fi until you don’t allow it to reconnect to your network.",
      "Even if you have made any changes to your network devices, you may need to power cycle your printer. In other words, you can understand that you need to turn it off and turn it on to reconnect to your network. However, if you fail to connect your printer to Wi-Fi, you can contact us to get better help and use your printer in the right way.",
      "If you are looking for DIY tips to troubleshoot your printer issues, you can follow the given steps:",
      "Make sure your printer is on.",
      "Connect your printer to your computer/laptop or other devices.",
      "Check the toner and paper of your printer with its queue.",
      "Check for error messages or any warning lights on the printer.",
      "Make sure it is connected to WiFi.",
      "Use a USB cable to connect and check whether it is working or not.",
      "Confirm that you are using the right network to connect your printer.",
      "If you have recently updated your security software, browsers, firewalls, or operating systems, then the chances are high that you can experience a number of issues while connecting your wireless printer setup. Still, you don’t need to panic. In this case, you can reconnect your device to the network and install updated drivers.",
      "Check router settings.",
      "Restart all your devices and run the printing troubleshooter.",
      "Set your printer as a default printer.",
      "Update router firmware.",
      "Disable VPN Connections.",
      "Check your SSID.",
    ],
  },
];

// import React from 'react';
// import { Link } from 'react-router-dom';

// const PrinterOffline = () => {
//   return (
//     <main className=" min-h-screen py-8">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-24">
//         <section className="p-2 rounded-lg  mb-10 flex flex-col justify-center items-center">
//           <h2 className="text-3xl font-bold mb-4 text-[#292524] ">
//             Printer Offline
//           </h2>
//           <div className="text-gray-700 w-[80%] ">
//             <p className="mb-4">
//               You may see a “printer offline” error if your device can’t
//               communicate with your printer. This can happen for a few different
//               reasons but follow these simple steps and you should be back up
//               and running.
//             </p>
//             <ul className="list-disc list-inside space-y-2">
//               <li>
//                 Turn off your printer and disconnect it from the power supply.
//               </li>
//               <li>
//                 Restart the device you want to print from and your internet
//                 router.
//               </li>
//               <li>Turn the printer back on and try to print again.</li>
//             </ul>

//             <p>
//               Check that the printer and the device you want to print from are
//               on the same network. If you need it, you can  <br/>
//               <span className="text-[#0278AB] ">
//                  find help with Wifi connections here
//               </span>
//             </p>
//           </div>
//         </section>

//         <section className="bg-white  flex p-6 rounded-lg shadow-md">
//           <div className="mb-6 p-10">
//             <h3 className="text-2xl font-bold mb-4 text-[#292524]">HP Smart</h3>
//             <p className="text-gray-700 mb-4">
//               If your printer is still offline, the Diagnose & Fix tool in the
//               HP Smart desktop app can solve issues and automatically maintain
//               your printer’s health. To use Diagnose & Fix:
//             </p>
//             <ul className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
//               <li>Open or download the application on Windows or Mac</li>
//               <li>
//                 For Windows, select the wrench icon in the bottom left corner
//               </li>
//               <li>On Mac, tap the printer dropdown in the top menu bar</li>
//               <li>Follow the onscreen instructions</li>
//             </ul>
//             <Link
//               to="/downloadDrivers"
//               className="bg-[#0278AB] text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
//             >
//               Get HP Smart
//             </Link>
//           </div>

//           <div>
//             <img
//               src="https://h30434.www3.hp.com/t5/image/serverpage/image-id/364552i552343BAB90E76E7/image-dimensions/1700?v=v2&px=-1"
//               alt="HP Smart"
//               className="w-full rounded"
//             />
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// };

// export default PrinterOffline;
