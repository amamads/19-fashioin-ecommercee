const paths = {
  auth: {
    auth: "/auth",
  },
  home: "/",
  account: {
    index: "/account",
  },
  checkout: {
    cart: "/cart",
    checkout: "/checkout",
    payment: "/payment",
  },
  store: {
    products: "/products",
    productShow: (slug: string) => `/products/${slug}`,
  },
  info: {
    about: "/about",
    contactUs: "/contact-us",
    terms: "/terms",
  },
} as const;

export default paths;