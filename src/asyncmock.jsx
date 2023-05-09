const products = [
  {
    id: 1,
    name: "Chocotorta",
    img: "../img/chocotorta.jpg",
    descripcion:
      "Capas de galletitas chocolinas, dulce de leche y queso crema. Cobertura: trocitos de galletitas y rulos de chocolate",
    price: 4600,
    stock: 10,
    category: "tortas",
  },
  {
    id: 2,
    name: "Lemon Pie",
    img: "../img/lemonpie.jpg",
    description:
      "Base de masa sablée, crema de limón. Cobertura: merengue italiano",
    price: 4600,
    stock: 12,
    category: "tortas",
  },
  {
    id: 3,
    name: "Rogel",
    img: "../img/rogel.jpg",
    description:
      "Capas de masa crocante de alfajor santafesino, abundante dulce de leche y merengue italiano",
    price: 4600,
    stock: 8,
    category: "tortas",
  },
  {
    id: 4,
    name: "Straciatella",
    img: "../img/straciatella.jpg",
    description:
      "Masa húmeda combinada de chocolate y mousse de dulce de leche granizado",
    price: 4200,
    stock: 8,
    category: "tortas",
  },

  {
    id: 5,
    name: "Toffi",
    img: "../img/toffi.jpg",
    description:
      "Base de masa frola de chocolate con castañas de cajú y dulce de leche. Cobertura: ganache y rulos de chocolate",
    price: 4200,
    stock: 8,
    category: "tortas",
  },
  {
    id: 6,
    name: "Tiramisú",
    img: "../img/tira.jpg",
    description:
      "Pionono de café bien húmedo, batido de queso, crema y salsa inglesa. Cobertura: cacao en polvo",
    price: 4200,
    stock: 8,
    category: "tortas",
  },
  {
    id: 7,
    name: "Saint Honore",
    img: "../img/sainthonore.jpg",
    description:
      "Torre de profiteroles rellenos con crema pastelera, pastelera al chocolate y dulce de leche. Cobertura de caramelo. Consultar por relleno de crema chantilly con cobertura de chocolate",
    price: 5000,
    stock: 10,
    category: "tortas",
  },
  {
    id: 8,
    name: "Alvear",
    img: "../img/alvear.jpg",
    description:
      "Capas de hojaldre caramelizado, crema pastelera y almíbar de damascos. Cobertura: copos de merengue y cerezas",
    price: 4700,
    stock: 12,
    category: "tortas",
  },
  {
    id: 9,
    name: "Brownie",
    img: "../img/brownie.jpg",
    description:
      "Torta de chocolate con nueces, mousse de chocolate, trocitos de merengue y dulce de leche. Cobertura: merengue italiano y viruta de chocolate",
    price: 5100,
    stock: 8,
    category: "tortas",
  },
  {
    id: 10,
    name: "Cheesecake",
    img: "../img/cheesecake.jpg",
    description:
      "Suave pionono de vainilla, batido de queso crema, jugo y rayadura de limón. Cobertura: geleé de frutos rojos",
    price: 4800,
    stock: 8,
    category: "tortas",
  },

  {
    id: 11,
    name: "Krocco",
    img: "../img/krocco.jpg",
    description:
      "Torta de chocolate, cremoso mousse de chocolate semi amargo, frutos rojos y microgalletitas cubiertas de chocolate. Cobertura: chocolate negro y amarenas",
    price: 5000,
    stock: 8,
    category: "tortas",
  },

  {
    id: 12,
    name: "Bavorois",
    img: "../img/bavorois.jpg",
    description:
      "Suave pionono de vainilla, mousse de limón. Cobertura:geleé de maracuya",
    price: 4600,
    stock: 8,
    category: "tortas",
  },
  {
    id: 13,
    name: "Masas",
    img: "../img/masas.jpg",
    description:
      "Profiteroles rellenos, cañoncitos rellenos, palmeritas, minipostres, tocinito del cielo, coco con dulce de leche, copitos de dulce de leche, macarrones, merenguitos",
    price: 5100,
    stock: 8,
    category: "panaderia",
  },
  {
    id: 14,
    name: "Tartas",
    img: "../img/tartas.jpg",
    description:
      "Profiteroles rellenos, cañoncitos rellenos, palmeritas, minipostres, tocinito del cielo, coco con dulce de leche, copitos de dulce de leche, macarrones, merenguitos",
    price: 800,
    stock: 12,
    category: "salados",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === parseInt(productId)));
    }, 500);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === category));
    }, 500);
  });
};
