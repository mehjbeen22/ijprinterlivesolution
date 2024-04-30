const refundAndReturn = [
  {
    id: 1,
    head: 'Return and Refunds Policy',
    desc: `You are entitled to cancel your order within 30 days without giving any reason for doing so.

The deadline for canceling an order is 30 days from the date you received the goods or on which a third party you have appointed, who is not the carrier, takes possession of the product delivered.

In order to exercise your right of cancellation, you must inform us of your decision by means of a clear statement.

You can inform us of your decision by e-mail 123-printerlivesolution.com

We will reimburse you no later than 30 days from the day on which we receive the returned goods. We will use the same means of payment as you used for the order, and you will not incur any fees for such reimbursement.`,
  },

  {
    id: 2,
    head: 'Returning Goods',
    desc: `You are responsible for the cost and risk of returning the goods to us. You should send the goods to the following address:

8270 Woodland Center Blvd, Tampa, FL 33614 USA

We cannot be held responsible for goods damaged or lost in return shipment. Therefore, we recommend an insured and trackable mail service. We are unable to issue a refund without actual receipt of the goods or proof of received return delivery.`,
  },
  {
    id: 3,
    head: 'Gifts:',
    desc: `If the goods were marked as a gift when purchased and then shipped directly to you, you’ll receive a gift credit for the value of your return. Once the returned product is received, a gift certificate will be mailed to you.

If the goods weren’t marked as a gift when purchased, or the gift giver had the order shipped to themselves to give it to you later, We will send the refund to the gift giver.`,
  },
  {
    id: 4,
    head: 'Contact Us',
    desc: `If you have any questions about our Returns and Refunds Policy, please contact us by e-mail 123-printerlivesolution.com`,
  },
];

import React from 'react';

const RefundandReturn = () => {
  return (
    <>
      <>
        <div style={style}></div>
        <h1 className="text-center text-6xl text-red-500 m-5">
          Return And Refund Policy
        </h1>
        <div className="p-16">
          <div className="flex justify-center flex-col p-5 shadow-md border border-gray-200 rounded-sm">
            {refundAndReturn.map(({ id, head, desc }) => {
              return (
                <div key={id}>
                  <h3 className="text-2xl m-2">{head}</h3>
                  <p className="text-l m-3">{desc}</p>
                </div>
              );
            })}

            <h3 className="text-2xl m-2">Conditions for returns:</h3>
            <p className="text-l m-3">
              In order for the goods to be eligible for a return, please make
              sure that:
            </p>

            <p className="text-l m-1">
              👉 The goods were purchased in the last 30 days
            </p>
            <p className="text-l m-1">
              👉 The goods are in the original packaging
            </p>
            <p className="text-l m-1">
              👉The supply of goods made to your specifications or clearly
              personalized.
            </p>
            <p className="text-l m-1">
              👉 The supply of goods which according to their nature are not
              suitable to be returned, for example goods which deteriorate
              rapidly or where the date of expiry is over.
            </p>
            <p className="text-l m-1">
              👉 The supply of goods which are not suitable for return due to
              health protection or hygiene reasons and were unsealed after
              delivery.
            </p>
            <p className="text-l m-1">
              👉 The supply of goods which are, after delivery, according to
              their nature, inseparably mixed with other items. We reserve the
              right to refuse returns of any merchandise that does not meet the
              above return conditions at our sole discretion.
            </p>
          </div>
        </div>
      </>
    </>
  );
};

export default RefundandReturn;

const style = {
  backgroundImage:
    "url('https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/08/featured-25.png?fit=600%2C300&ssl=1')",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '400px',
};
