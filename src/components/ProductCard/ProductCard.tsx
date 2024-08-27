// src/components/ProductCard/ProductCard.tsx
import React from 'react';
import styles from './ProductCard.module.scss';
import { FaRegHeart } from 'react-icons/fa';
import { BiCartAlt } from 'react-icons/bi';
import productImg from '@/assets/images/Nike Zoom KD 12.png';
import { CustomButton } from '@/components';
import { Product } from '@/interfaces'; // Import giao diện

interface ProductCardProps {
  product: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.product__card}>
      <div className={styles.product__actions}>
        <FaRegHeart className={styles.product__heart} />
        <BiCartAlt className={styles.product__cart} />
      </div>
      <div className={styles.product__img}>
        <img src={productImg} alt="product-img" />
      </div>
      <h2 className={styles.product__title}>{product.name}</h2>
      <p className={styles.product__price}>{product.price}</p>
      <ul className={styles.product__sizes}>
        <h3>Size: </h3>
        {product.sizes?.map((size) => <li key={size}>{size}</li>)}
      </ul>
      <ul className={styles.product__colors}>
        <h3>Color: </h3>
        {product.colors?.map((color, index) => (
          <li key={index} style={{ backgroundColor: color }}></li>
        ))}
      </ul>
      <div className={styles.product__buttons}>
        <CustomButton title={'Buy now'} />
        <CustomButton title={'Add cart'} />
      </div>
    </div>
  );
};

export default ProductCard;
