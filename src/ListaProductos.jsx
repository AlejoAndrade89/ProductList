import styles from "./ListaProductos.module.css";

const productos = [
  {
    nombre: "Macbook Air 13 Chip M1 256gb",
    image: "https://m.media-amazon.com/images/I/41O807iqbCL._AC_SX522_.jpg",
    precio: "R$ 7999.00",
  },
  {
    nombre: "Echo Dot (4ª Geração)",
    image: "https://m.media-amazon.com/images/I/714Rq4k05UL._AC_SL1000_.jpg",
    precio: "R$ 379.00",
  },
  {
    nombre: "Câmera Ip Sem Fio 360°",
    image: "https://m.media-amazon.com/images/I/51F70OM213S._AC_SL1000_.jpg",
    precio: "R$ 199.00",
  },
  {
    nombre: "Fechadura Eletrônica Digital Inteligente Zigbee",
    image: "https://m.media-amazon.com/images/I/51RXeqMLceL._AC_SL1500_.jpg",
    precio: "R$ 1599.00",
  },
];

import React from "react";

export const ListaProductos = () => {
  return (
    <div>
      <ul>
        {productos.map((element) => {
          return (
            <ul>
              <li className={styles.listStyle} key={element.precio}>
                <h1 className={styles.nameProduct}>
                  Producto: {element.nombre}
                </h1>
                <img src={element.image} alt="" />
                <h2>Precio: {element.precio}</h2>
              </li>
            </ul>
          );
        })}
      </ul>
    </div>
  );
};
