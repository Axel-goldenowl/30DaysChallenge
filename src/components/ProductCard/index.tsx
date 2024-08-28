import React from 'react'

import className from 'classnames/bind'

import { BiCartAlt } from 'react-icons/bi'

import { FaRegHeart } from 'react-icons/fa'

import { Product } from '@/interfaces'

import { CustomButton } from '@/components'

import productImg from '@/assets/images/Nike Zoom KD 12.png'

import style from './ProductCard.module.scss'

interface ProductCardProps {
  product: Product
}
const cx = className.bind(style)

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={cx('product__card')}>
      <div className={cx('product__actions')}>
        <FaRegHeart className={cx('product__heart')} />
        <BiCartAlt className={cx('product__cart')} />
      </div>
      <div className={cx('product__img')}>
        <img src={productImg} alt='product-img' />
      </div>
      <h2 className={cx('product__title')}>{product.name}</h2>
      <p className={cx('product__price')}>{product.price}</p>
      <ul className={cx('product__sizes')}>
        <h3>Size: </h3>
        {product.sizes?.map((size:number) => <li key={size}>{size}</li>)}
      </ul>
      <ul className={cx('product__colors')}>
        <h3>Color: </h3>
        {product.colors?.map((color:string, index:number) => <li key={index} style={{ backgroundColor: color }}></li>)}
      </ul>
      <div className={cx('product__buttons')}>
        <CustomButton title={'Buy now'} />
        <CustomButton title={'Add cart'} />
      </div>
    </div>
  )
}

