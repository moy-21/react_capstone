import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function MasonryImageList() {
  return (
    <Box sx={{ width: "100%", height: 800, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://res.cloudinary.com/dipcloqy3/image/upload/v1655869887/Close-up-of-rim-on-car_j9nuqi.png',
    title: 'Bed',
  },
  {
    img: 'https://res.cloudinary.com/dipcloqy3/image/upload/v1655869873/car-mechanic-changing-engine-oil-royalty-free-image-186804373-1557189763_doyjev.jpg',
    title: 'Books',
  },
  {
    img: 'https://res.cloudinary.com/dipcloqy3/image/upload/v1655869768/app-usability-testing_qelne3.png',
    title: 'Sink',
  },
  {
    img: 'https://res.cloudinary.com/dipcloqy3/image/upload/v1655869694/Honda_20Civic_20Si_20Coupe_2018_2_yvleu0.jpg',
    title: 'Kitchen',
  },
  {
    img: 'https://res.cloudinary.com/dipcloqy3/image/upload/v1655869558/1636986965527_yxvttf.jpg',
    title: 'Blinds',
  },
  {
    img: 'https://res.cloudinary.com/dipcloqy3/image/upload/v1655869434/BMW-SOC23-X1-Homepage-Hero-Mobile_b3apvj.jpg',
    title: 'Chairs',
  },
  {
    img: 'https://res.cloudinary.com/dipcloqy3/image/upload/v1655870712/photo-1564845922805-122c5ad7d728_kh9ro1.jpg',
    title: 'Laptop',
  },
  {
    img: 'https://res.cloudinary.com/dipcloqy3/image/upload/v1655869482/gettyimages-1170291959_xfip6q.jpg',
    title: 'Doors',
  },
  {
    img: 'https://res.cloudinary.com/dipcloqy3/image/upload/v1655869631/What_is_a_car_diagnostic_test_pexels-m_C3_ADdia-4116193_vwaluu.jpg',
    title: 'Coffee',
  },
  {
    img: 'https://res.cloudinary.com/dipcloqy3/image/upload/v1655869654/_116968703_gettyimages-462404568_nsupnl.jpg',
    title: 'Storage',
  },
  {
    img: 'https://res.cloudinary.com/dipcloqy3/image/upload/v1655869843/road-g1183113d9_1920_hpcxph.jpg',
    title: 'Candle',
  },
  {
    img: 'https://res.cloudinary.com/dipcloqy3/image/upload/v1655869416/2023_Toyota_Sequoia_FD_2_mowct7.jpg',
    title: 'Coffee table',
  },
  {
    img: 'https://res.cloudinary.com/dipcloqy3/image/upload/v1656015786/Car_Diagnostics_ka0xbj.png',
    title: 'Coffee table',
  },
];
