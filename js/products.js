
const products = [
  {
    name: 'Betadex 0.1%',
    description: 'Betametasona Dipionato, crema 15 g',
    image: 'prod_betadex_0.1'
  },
  {
    name: 'Betadex G',
    description: 'Betametasona - Gentamicina, crema 15 g',
    image: 'prod_betadex_g'
  },
  {
    name: 'Betadex Plus',
    description: 'Betametasona - Dipionato - Clotrimazol, Crema 20 g',
    image: 'prod_betadex_plus'
  },
  {
    name: 'Diclonefac Potásico 75 mg.',
    description: 'Solución inyectable IM/IV, 10 ampollas de 75 mg / 3ml',
    image: 'prod_diclofenac_potasico'
  },
  {
    name: 'Diclonefac Sódico 75 mg.',
    description: 'Solución inyectable IM/IV, 10 ampollas de 75 mg / 3 ml',
    image: 'prod_diclofenac_sodico'
  },
  {
    name: 'Elok',
    description: 'Mometasona furoato 0.1%, crema 20 g',
    image: 'prod_elok_mometasona'
  },
  {
    name: 'Elok Loción.',
    description: 'Furoato de mometasona, 30 ml',
    image: 'prod_elok_locion'
  },
  {
    name: 'Hierro 100 mg.',
    description: 'Solo para uso IV, 5 ampollas de 100 mg/5 ml',
    image: 'prod_hierro'
  },
  {
    name: 'Omeprazol 40 mg.',
    description: 'Solo para uso IV, 1 vial',
    image: 'prod_omeprazol'
  },
  {
    name: 'Triamcinolona Acetonida 40 mg.',
    description: 'Solución inyectable IM., 1 vial',
    image: 'prod_trimcinolona'
  },
  {
    name: 'Vitamina B12 400 mcg',
    description: 'Solución inyectable IM/IV, 10 ampollas de 400 mcg',
    image: 'prod_vitamina_b12'
  },
  {
    name: 'Vitamina C 500 mg',
    description: 'Solución inyectable IM/IV, 10 ampollas de 500 mg / 2 ml>',
    image: 'prod_vitamina_c'
  },
  {
    name: 'Vitamina K 10 mg',
    description: '<small>Solución inyectable IM/IV, 10 ampollas de 10mg/2ml.</small>',
    image: 'prod_vitamina_k10'
  },
]

const getProducts = () => {
  products.forEach(product => {
    $('#products').append(`
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
          <img src="./images/products/${product.image}.jpg" alt="">
        </div>
        <div class="blog-slider__content text-align-center">
          <div class="blog-slider__title">${product.name}</div>
          <div class="blog-slider__text">${product.description}</div>
        </div>
      </div>
    `);
  });
}