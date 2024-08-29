import { useEffect, useState } from 'react'

import classNames from 'classnames/bind'

import { GoSearch } from 'react-icons/go'

import { useDebounce } from '@/hooks'

import { apiGetProducts } from '@/services'

import style from './LessonFifteen.module.scss'

const cx = classNames.bind(style)

export const LessonFifteen = () => {
  const [products, setProducts] = useState([])

  const [filteredProducts, setFilteredProducts] = useState([])

  const [offset, setOffset] = useState(10)

  const [loading, setLoading] = useState(false)

  const [searchValue, setSearchValue] = useState('')

  const debouncedSearchValue = useDebounce(searchValue, 500)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { status, data } = await apiGetProducts()
        if (status === 200) {
          setProducts(data)
          setFilteredProducts(data)
        }
      } catch (error) {
        console.error('Failed to fetch products:', error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (debouncedSearchValue.trim()) {
      const resultSearchProducts = products.filter((product) =>
        product.title.toLowerCase().includes(debouncedSearchValue.toLowerCase())
      )
      setFilteredProducts(resultSearchProducts)
    } else {
      setFilteredProducts(products)
    }
  }, [debouncedSearchValue, products])

  const handleLoadMore = () => {
    if (offset < filteredProducts.length) {
      setOffset((prevOffset) => prevOffset + 10)
      setLoading(true)
      setTimeout(() => setLoading(false), 300)
    }
  }

  return (
    <div className={cx('main')}>
      <div className={cx('container')}>
        <div className={cx('product__action')}>
          <h3 className={cx('title')}>Live Product Filter</h3>
          <div className={cx('form__control')}>
            <GoSearch className={cx('form__icon')} />
            <input
              type='text'
              placeholder='Tìm sản phẩm mong muốn...'
              className={cx('form__input')}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>
        {filteredProducts.length > 0 && (
          <>
            <ul className={cx('product__list')}>
              {filteredProducts.slice(0, offset).map((product) => (
                <li key={product.id} className={cx('product__item')}>
                  <img src={product.image} alt={product.title} className={cx('product__image')} />
                  <div className={cx('product__detail')}>
                    <h4 className={cx('product__name')}>{product.title.slice(0, 30)}...</h4>
                    <p className={cx('product__price')}>${product.price}</p>
                  </div>
                </li>
              ))}
            </ul>
            {offset < filteredProducts.length && (
              <button className={cx('product__btn',{ "disable": loading })} onClick={handleLoadMore} disabled={loading}>
                Load more
                {loading && <div className={cx('loading')}></div>}
              </button>
            )}
          </>
        )}
      </div>
    </div>
  )
}
