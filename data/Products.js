const products = [
  {
    name: "Dame 8 Extply Basketball Shoe",
    image: "/images/10.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 89,
    countInStock: 3,
    rating: 4,
    numReviews: 4,
    category: "Adidas",
  },
  {
    name: "Nike Court Vision Low Next Nature",
    image: "/images/9.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 89,
    countInStock: 3,
    rating: 4,
    numReviews: 4,
    category: "Nike",
  },
  {
    name: "Coverse Full Force Low",
    image: "/images/8.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 89,
    countInStock: 3,
    rating: 4,
    numReviews: 4,
    category: "Converse",
  },
  {
    name: "Giannis Immortality 2",
    image: "/images/7.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 37,
    countInStock: 3,
    rating: 4,
    numReviews: 4,
    category: "Puma",
  },
  {
    name: "Velcro Ballerinas For Girls  (Pink)",
    image: "/images/6.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 28,
    countInStock: 3,
    rating: 4,
    numReviews: 4,
    category: "Adidas",
  },
  {
    name: "Velcro Sneakers For Boys & Girls  (Blue)",
    image: "/images/5.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 599,
    countInStock: 10,
    rating: 2,
    numReviews: 2,
    category: "Nike",
  },
  {
    name: "Sesame Street Unisex-Child ELMO Puppet Slipper",
    image: "/images/4.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 929,
    countInStock: 0,
    rating: 3.5,
    numReviews: 3,
    category: "Converse",
  },
  {
    name: "Lace Casual Boots For Boys & Girls  (Tan)",
    image: "/images/3.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 399,
    countInStock: 10,
    rating: 5,
    numReviews: 9,
    category: "Puma",
  },
  {
    name: "Lace Walking Shoes For Boys & Girls  (Pink)",
    image: "/images/2.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 49,
    countInStock: 7,
    rating: 2,
    numReviews: 2,
    category: "Nike",
  },
  {
    name: "Women Red Heels Sandal",
    image: "/images/1.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 60,
    rating: 2,
    numReviews: 0,
    category: "Adidas",
  },
  {
    name: "Corverse Red Heels Sandal",
    image: "/images/11.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 80,
    rating: 4,
    numReviews: 0,
    category: "Converse",
  },
  {
    name: "Nike Black Heels Sandal",
    image: "/images/12.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 0,
    rating: 3,
    numReviews: 0,
    category: "Nike",
  },
  {
    name: "Puma white Heels Sandal",
    image: "/images/13.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 100,
    rating: 4,
    numReviews: 0,
    category: "Puma",
  },
  {
    name: "Jorda  Red Heels Sandal",
    image: "/images/14.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 90,
    rating: 2,
    numReviews: 0,
    category: "Jordan",
  },
  {
    name: "Jordan Black Heels Sandal",
    image: "/images/15.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 30,
    rating: 1,
    numReviews: 0,
    category: "Jordan",
  },
];

export default products;
