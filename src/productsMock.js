export let products = [
      {
        title: "Samsung Galaxy A24",
        price: 11900,
        stock: 7,
        description: "El Samsung Galaxy A24 es un smartphone con una pantalla Super AMOLED de 6.5 pulgadas a resolución FHD+ y tasa de refresco de 90Hz, y potenciado por un procesador Helio G99 de MediaTek con 6GB o 8GB de memoria RAM y 128GB de almacenamiento interno expandible",
        category: "celulares",
        img: "https://res.cloudinary.com/dwg1khl34/image/upload/v1709673310/samsunggalaxya24_am4tli.webp",
      },
      {
        title: "Xiaomi Redmi a2",
        price: 4400,
        stock: 16,
        description:
          "Cuenta con un procesador Mediatek Helio G36, 2GB de memoria RAM y 64GB de almacenamiento interno que le permite ejecutar Android 13 Go sin problemas. Se encuentra respaldado por una gran batería Li-Po de 5000mAh de capacidad y además viene con un cargador micro USB de 10W que brinda una carga super rápida",
        category: "celulares",
        img: "https://res.cloudinary.com/dwg1khl34/image/upload/v1709674417/xiaomiredmia2_s5dyou.jpg",
      },
      {
        title: "Portátil Dell Latitude 12 7000",
        price: 6300,
        description: "Esta laptop tiene un procesador Intel Core i5 y una pantalla de 12.5 pulgadas",
        img: "https://res.cloudinary.com/dwg1khl34/image/upload/v1709674280/laptopdell_rvfe9z.webp",
        stock: 4,
        category: "laptops",
      },
      {
        title: "Auriculares Logitech G332",
        price: 2120,
        stock: 11,
        description: "Los audífonos Logitech G332 para juegos producen un gran sonido que permite sumergirse en el juego. Vive la intensidad de una experiencia de juego completa donde lo oyes todo y te oyen todos",
        category: "auriculares",
        img: "https://res.cloudinary.com/dwg1khl34/image/upload/v1709671572/auris_goat_yubdgo.jpg",
      },
    ];
    
    export const getProducts = () => {
      return new Promise((resolve, reject) => {
        if (products.length > 0) {
          setTimeout(() => {
            resolve(products);
          }, 500);
        } else {
          reject("No hay productos");
        }
      });
    };
    
    export const getProduct = (id) => {
      return new Promise((resolve, reject) => {
        if (products.length > 0) {
          const item = products.find((product) => product.id === id);
    
          setTimeout(() => {
            if (item) {
              resolve(item);
            } else {
              reject(`No se encuentra el producto con el id ${id}`);
            }
          }, 500);
        } else {
          reject("No hay productos");
        }
      });
    };
