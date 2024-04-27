import * as React from 'react';

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ProductSection from './ProductSection';
import FeatureProduct from './FeatureProduct';

export default function Products() {
  return (
    <section className=" flex flex-col items-center text-center">
      {/*border-4 border-green-500  */}
      <h1 className="text-5xl">
        <span className="text-red-600">P</span>roducts
      </h1>
      <div>
        {/* className="border-2 border-current" */}
        <div className=" flex flex-col justify-center align-center mt-10 gap-5 p-16 shadow-2xl ">
          {/* border-4 border-red-200 */}
          <h2 className="text-center text-3xl  italic">
            Best Selling Products
          </h2>
          <div className="grid gap-4 mt-7 sm:grid-cols-2 md:grid-cols-3">
            {cardData.map(
              ({ id, imageLink, description, price, previousPrice }) => {
                return (
                  <Card
                    key={id}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{ maxWidth: '70%' }}
                      image={imageLink}
                      alt="Product"
                    />

                    <CardContent className="flex flex-col gap-1 justify-center">
                      <Typography className="text-lg">{description}</Typography>
                      <Typography color="text.secondary">
                        <span className="text-lg text-red-500 mr-2">
                          {price}{' '}
                        </span>{' '}
                        <span className="line-through">{previousPrice} </span>
                      </Typography>

                      <Button
                        variant="text"
                        sx={{
                          color: 'orangered',
                          '&:hover': {
                            textDecoration: 'underline',
                            backgroundColor: 'white',
                          },
                        }}
                      >
                        Quick View
                      </Button>

                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: 'black',
                          '&:hover': {
                            backgroundColor: 'red', // Change background color on hover
                          },
                        }}
                      >
                        ADD TO CART
                      </Button>
                    </CardContent>
                  </Card>
                );
              },
            )}
          </div>
        </div>

        {/* ------------ TWO COMPONENTS CALL -------------  */}
        <ProductSection />
        <FeatureProduct />

        {/* ------------------------------------------------ */}
      </div>
    </section>
  );
}

// ----------- DATA -----------------
const cardData = [
  {
    id: 1,
    imageLink: 'https://ijprintersolution.com/images/m7.jpg',
    description: 'Canon PIXMA E477 Colour Printer',
    price: '$68.00 ',
    previousPrice: '$80.00',
  },

  {
    id: 2,
    imageLink: 'https://ijprintersolution.com/images/m8.jpg',
    description: 'Canon PIXMA MegaTank Printer',
    price: '$193.00 ',
    previousPrice: '$207.00',
  },
  {
    id: 3,
    imageLink: 'https://ijprintersolution.com/images/m9.jpg',
    description: 'Canon PIXMA Monochrome Printer',
    price: '$520.99',
    previousPrice: '$600.99',
  },
  {
    id: 4,
    imageLink: 'https://ijprintersolution.com/images/m4.jpg',
    description: 'Canon PIXMA MegaTank G2012',
    price: '$145.00',
    previousPrice: '$160.00',
  },
  {
    id: 5,
    imageLink: 'https://ijprintersolution.com/images/m5.jpg',
    description: 'Canon PIXMA MG3070S Printer',
    price: '$55.00',
    previousPrice: '$70.00',
  },
  {
    id: 6,
    imageLink: 'https://ijprintersolution.com/images/m6.jpg',
    description: 'Canon MF244DW Digital Printer',
    price: '$360.00',
    previousPrice: '$400.00',
  },
];
