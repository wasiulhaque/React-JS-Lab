import React from "react";
import Product from "./Product"

function ProductCardItem() {
  const products = [
    {
      id: 1,
        title: 'The Pickwick Papers',
        description: 'By Charles Dickens.',
        url: '#',
        votes: 10,
        submitterAvatarUrl: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2NTQ1NTM2OTM2MDYwMTQ2/charles-dickens.jpg',
        productImageUrl: 'https://kbimages1-a.akamaihd.net/43b06cb3-bbe6-4733-8b42-39774911a9e6/353/569/90/False/the-pickwick-papers-123.jpg',
    },
    {
      id: 2,
      title: 'Oliver Twist',
      description: ' By Charles Dickens.',
      url: '#',
      votes: 10,
      submitterAvatarUrl: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2NTQ1NTM2OTM2MDYwMTQ2/charles-dickens.jpg',
      productImageUrl: 'https://m.media-amazon.com/images/I/51SH9vHXgtL.jpg',
    },
    {
      id: 3,
      title: 'Hamlet',
      description: 'By William Shakespeare.',
      url: '#',
      votes: 10,
      submitterAvatarUrl: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE1ODA0OTcxNzgzMzkwNzMz/william-shakespeare-194895-1-402.jpg',
      productImageUrl: 'https://m.media-amazon.com/images/I/41ogY1y1smL.jpg',
    },
    {
      id: 4,
      title: 'Macbeth',
      description: 'By William Shakespeare',
      url: '#',
      votes: 10,
      submitterAvatarUrl: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE1ODA0OTcxNzgzMzkwNzMz/william-shakespeare-194895-1-402.jpg',
      productImageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/51zXHKMSvfL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
    },
  ];
  return {products: products} ();
}

export default ProductCardItem;
