import React from 'react';

const FaqPage = () => {
  return (
    <>
      <div style={style}></div>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-center text-6xl text-red-500 m-5">Faqs</h1>
        <p className="text-3xl mb-5">Top 10 Frequently asked questions</p>

        <ol className=" p-8" style={{ width: '80%' }}>
          {frequentlyAskedQuestions.map(({ id, ques, ans }) => {
            return (
              <li
                key={id}
                className="my-8 shadow-md p-5 border border-gray-200 rounded-sm"
              >
                <p className="text-teal-500 text-xl mb-2">
                  {' '}
                  <span>{id}.</span> {ques}
                </p>
                <p>{ans}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default FaqPage;

// .................................. DATA  ........................................
const style = {
  backgroundImage: "url('https://ijprintersolution.com/images/bg.jpg')",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '400px',
};

const frequentlyAskedQuestions = [
  {
    id: 1,
    ques: 'Why is my printer taking so long?',
    ans: `If your printer is taking a long time to function, this could indicate an issue with the connection or a dodgy file. To resolve this, you need to address each possible fault.

  Firstly, check that everything is properly connected. Check the settings on your PC, laptop or mobile device and ensure that everything is fully linked up.

  If everything appears okay with the connection, check to see that the file is safe. If there is an issue with the file, then it is likely that the document will not print. A simple, quick-fire way to test this is to simply double click to open the file. If an error message pops up, and the file does not open, then there is a strong chance that it is corrupt.`,
  },
  {
    id: 2,
    ques: `How do I install paper trays?`,
    ans: `Your paper trays should always come with full installation instructions to guide you through the set-up process. If you are having issues with this, or if you are struggling to locate these instructions, please don’t hesitate to contact us. There are some great installation tutorials online, too!
      a) If the enterprise has at least two years of experience in carrying out the permitted activities, on the basis of which it applies to obtain the status;

  b) if the enterprise is a representative of a non-resident enterprise, which has at least two years of experience in the permitted activities.

  `,
  },
  {
    id: 3,
    ques: `What are the media restrictions with paper trays?`,
    ans: `With any paper tray, there will be media restrictions. What those restrictions are will depend on the paper tray that you have bought. Some trays have a higher capacity than others and so on, so this will completely vary. When you buy your paper tray(s), this information should come with the item itself.`,
  },
  {
    id: 4,
    ques: `What is a dot-matrix machine?`,
    ans: `Not dissimilar to typewriters in the way that they operate, dot-matrix is a form of computer printing which works using a print head that moves up and down or in a back and forth style motion. The print head strikes the ink-soaked cloth ribbon against the paper, and prints using the impact. Though this style of printing isn’t common nowadays, it has been highly popular in garages and when printing documents of high-importance such as bank statements.

  `,
  },
  {
    id: 5,
    ques: `What is a solid ink/wax printer?`,
    ans: `Currently the only group of printers that adopt this style of machine is the Xerox ColorQube range. Sold in/wax printers are exactly as you would imagine them to be. Unlike fluid ink cartridges, wax printers run of solid ink sticks. In order to print, the ink melts and transfers onto the paper. Xerox have copyrighted this method of print.`,
  },
  {
    id: 6,
    ques: `Can I print A4 on my A3 machine?`,
    ans: `Yes, of course you can! Depending on the manufacturer or model of your machine, you will probably have to use the printer handbook to follow instructions on how to adjust the settings to suit A4 paper.`,
  },
  {
    id: 7,
    ques: `Can I come to your office to buy a printer?`,
    ans: `Unfortunately, not, no – although we do love meeting our customers! Our service is for delivery only, and all orders must be made either online or via telephone.`,
  },
  {
    id: 8,
    ques: `Why can’t I scan to network?`,
    ans: `If you are experiencing difficulty scanning to a network, then this is most likely to be a connectivity issue. Double-check to ensure that everything is properly connected and try again. If the issue persists after you have trouble-shooted, then it may be worth contacting the manufacturer directly to report the issue. More often than not, though, a network connectivity failure is highly resolvable.`,
  },
];
