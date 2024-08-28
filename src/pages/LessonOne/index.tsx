import classNames from 'classnames/bind'
import { ProductCard } from '@/components'
import { products } from '@/data'
import style from './LessonOne.module.scss'
const cx = classNames.bind(style)
export const LessonOne = () => {
  return (
    <div className={cx('main')}>
      {products?.length > 0 && products.map((product, index) => <ProductCard key={index} product={product} />)}
    </div>
  )
}
