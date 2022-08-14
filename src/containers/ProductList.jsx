import React from 'react'
import ProductItem from '@components/ProductItem'
import useGetProducts from '@hooks/useGetProducts'
import styles from '@styles/ProductList.module.scss'

const API = 'https://api.escuelajs.co/api/v1/products'

const ProductList = () => {
  const { products } = useGetProducts(API)
  console.log(products)

  const render = (prod) => {
    if (prod == false) {
      return null
    }

    return (
      <section className={styles['main-container']}>
        <div className={styles['ProductList']}>
          {products.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </div>
      </section>
    )
  }

  return (render(products))
}

export default ProductList
