import { useEffect, useState, useRef } from 'react';

import { useInfiniteQuery } from '@tanstack/react-query';

import { GoSearch } from 'react-icons/go';

import classNames from 'classnames/bind';

import { useDebounce } from '@/hooks';

import { getProducts } from '@/services';

import { IProductLesson15 } from '@/interfaces';

import style from './LessonFifteen.module.scss';

const cx = classNames.bind(style);

export const LessonFifteen = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    initialPageParam: 0,
    queryKey: ['products'],
    queryFn: getProducts,
    getNextPageParam: (lastPage: IProductLesson15) => lastPage.nextPage,
  });

  const lastProductRef = useRef<HTMLLIElement | null>(null);

  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue, 500);

  const [filteredProducts, setFilteredProducts] = useState<IProductLesson15[]>([]);

  useEffect(() => {
    const products: IProductLesson15[] = data?.pages?.flatMap((page: IProductLesson15) => page.products) || [];
    if (debouncedSearchValue.trim()) {
      const resultSearchProducts = products.filter((product) =>
        product.title.toLowerCase().includes(debouncedSearchValue.toLowerCase())
      );
      setFilteredProducts(resultSearchProducts);
    } else {
      setFilteredProducts(products);
    }
  }, [debouncedSearchValue, data]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && hasNextPage) {
            fetchNextPage();
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0,
      }
    );

    if (lastProductRef.current) {
      observer.observe(lastProductRef.current);
    }

    return () => {
      if (lastProductRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(lastProductRef.current);
      }
    };
  }, [filteredProducts, fetchNextPage, hasNextPage]);

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
        <ul className={cx("product__list")}>
          {filteredProducts.map((product, index) => (
            <li 
              key={product.id} 
              className={cx('product__item')}
              ref={index === filteredProducts.length - 1 ? lastProductRef : null}
            >
              <img src={product.image} alt={product.title} className={cx('product__image')} />
              <div className={cx('product__detail')}>
                <h4 className={cx('product__name')}>{product.title.slice(0, 30)}...</h4>
                <p className={cx('product__price')}>${product.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
