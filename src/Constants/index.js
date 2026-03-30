import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";

import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

/* -------------------------------- NAVIGATION -------------------------------- */

export const navLinks = [
  { id: "home", href: "#home", label: "Home" },
  { id: "about", href: "#about-us", label: "About Us" },
  { id: "products", href: "#products", label: "Products" },
  { id: "contact", href: "#contact-us", label: "Contact Us" },
];

/* -------------------------------- HERO SHOES -------------------------------- */

export const heroShoes = [
  {
    id: 1,
    thumbnail: thumbnailShoe1,
    bigImage: bigShoe1,
  },
  {
    id: 2,
    thumbnail: thumbnailShoe2,
    bigImage: bigShoe2,
  },
  {
    id: 3,
    thumbnail: thumbnailShoe3,
    bigImage: bigShoe3,
  },
];

/* -------------------------------- STATISTICS -------------------------------- */

export const statistics = [
  { id: 1, value: "1K+", label: "Global Brands" },
  { id: 2, value: "500+", label: "Retail Shops" },
  { id: 3, value: "250K+", label: "Happy Customers" },
];

/* -------------------------------- PRODUCTS -------------------------------- */

export const products = [
  {
    id: 1,
    imgURL: shoe4,
    name: "Nike Air Jordan 1",
    category: "Basketball",
    price: 200.2,
    rating: 4.7,
    inStock: true,
  },
  {
    id: 2,
    imgURL: shoe5,
    name: "Nike Air Jordan 10",
    category: "Basketball",
    price: 210.2,
    rating: 4.6,
    inStock: true,
  },
  {
    id: 3,
    imgURL: shoe6,
    name: "Nike Air Jordan 100",
    category: "Sports",
    price: 220.2,
    rating: 4.8,
    inStock: true,
  },
  {
    id: 4,
    imgURL: shoe7,
    name: "Nike Air Jordan 001",
    category: "Running",
    price: 230.2,
    rating: 4.9,
    inStock: true,
  },
];

/* -------------------------------- SERVICES -------------------------------- */

export const services = [
  {
    id: 1,
    icon: truckFast,
    title: "Free Shipping",
    description:
      "Enjoy seamless shopping with our complimentary worldwide shipping service.",
  },
  {
    id: 2,
    icon: shieldTick,
    title: "Secure Payment",
    description:
      "Experience safe and encrypted transactions with trusted payment gateways.",
  },
  {
    id: 3,
    icon: support,
    title: "24/7 Customer Support",
    description:
      "Our support team is available anytime to help with your orders and questions.",
  },
];

/* -------------------------------- REVIEWS -------------------------------- */

export const reviews = [
  {
    id: 1,
    imgURL: customer1,
    name: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    id: 2,
    imgURL: customer2,
    name: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

/* -------------------------------- FOOTER -------------------------------- */

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", href: "/" },
      { name: "Air Max 1", href: "/" },
      { name: "Air Jordan 1", href: "/" },
      { name: "Air Force 2", href: "/" },
      { name: "Nike Waffle Racer", href: "/" },
      { name: "Nike Cortez", href: "/" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "About Us", href: "/" },
      { name: "FAQs", href: "/" },
      { name: "How It Works", href: "/" },
      { name: "Privacy Policy", href: "/" },
      { name: "Payment Policy", href: "/" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "customer@nike.com", href: "mailto:customer@nike.com" },
      { name: "+92 554 862 354", href: "tel:+92554862354" },
    ],
  },
];

/* -------------------------------- SOCIAL MEDIA -------------------------------- */

export const socialMedia = [
  { id: 1, src: facebook, alt: "Facebook" },
  { id: 2, src: twitter, alt: "Twitter" },
  { id: 3, src: instagram, alt: "Instagram" },
];
