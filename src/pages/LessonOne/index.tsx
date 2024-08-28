import classNames from 'classnames/bind'

import { products } from '@/data'

import { ProductCard } from '@/components'

import style from './LessonOne.module.scss'

const cx = classNames.bind(style)

export const LessonOne = () => {
  return (
    <div className={cx('main')}>
      {products?.length > 0 && products.map((product) => <ProductCard key={product.id} product={product} />)}
    </div>
  )
}
