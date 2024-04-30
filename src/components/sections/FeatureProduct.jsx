import * as React from 'react';

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
const FeatureProduct = () => {
  return (
    <div className=" flex flex-col justify-center items-center mt-10 gap-5 p-16 shadow-2xl  ">
      {/* border-4 border-red-200 */}
      <h2
        className="text-2xl  text-white inline p-3 sm:text-4xl"
        style={{ backgroundColor: '#991b1b' }}
      >
        Best Selling Products
      </h2>
      <div className="grid gap-4 mt-7 sm:grid-cols-2 md:grid-cols-3">
        {featureProducts.map(
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
                  sx={{ maxWidth: '50%' }}
                  image={imageLink}
                  alt="Product"
                />

                <CardContent className="flex flex-col gap-1 justify-center">
                  <Typography className="text-lg">{description}</Typography>
                  <Typography color="text.secondary">
                    <span className="text-lg text-red-500 mr-2">{price} </span>{' '}
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
  );
};

export default FeatureProduct;

const featureProducts = [
  {
    id: '01',
    imageLink:
      'https://asia.canon/media/image/2020/08/26/e0974bdc54d445039d4e3db2301b0c73_E34xx_AS_FR_cl2_blk_en-362x320.png',
    description: 'Canon imageCLASS LBP6030W Mono',
    price: '$370.00',
    previousPrice: '$400.00',
  },
  {
    id: '02',
    imageLink: 'https://i.ibb.co/CtZQGxY/image2.jpg',
    description: 'Canon MF3010 Multifunction Printer',
    price: '$230.00',
    previousPrice: '$250.00',
  },
  {
    id: '03',
    imageLink: 'https://i.ibb.co/HNyKJbn/images3.jpg',
    description: 'Canon PIXMA IX6770 A3 Printer',
    price: '$145.00',
    previousPrice: '$170.00',
  },
];
