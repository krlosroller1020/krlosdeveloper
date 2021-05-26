import axios from 'axios';
import Rating from '../components/Rating';
import { getProducts } from '../api';
import data from '../data.js';
const HomeScreen = {
  render: async () => {
      const { products } = data;
    const productos = await getProductos();
    if (productos.error) {
      return `<div class="error">${productos.error}</div>`;
    }

    return `
    <ul class="productos">
      ${productos
        .map(
          (producto) => `
      <li>
            <div class="producto">
          <a href="/#/product/${producto._id}">
            <img src="${producto.imagen}" alt="${producto.nombre}" />
          </a>
        <div class="producto-nombre">
          <a href="/#/product/1">
            ${producto.nombre}
          </a>
        </div>
        <div class="producto-rating">
          ${Rating.render({
            value: producto.rating,
            text: `${producto.numReviews} reviews`,
          })}
        </div>
        <div class="producto-marca">
          ${producto.brand}
        </div>
        <div class="product-precio">
          $${producto.precio}
        </div>
        </div>
      </li>
      `
        )
        .join('\n')}
    `;
  },
};
export default HomeScreen;