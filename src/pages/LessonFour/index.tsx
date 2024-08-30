import { useState } from 'react'

import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import classNames from 'classnames/bind'

import { images } from '@/data'

import { useBoolean } from '@/hooks'

import style from './LessonFour.module.scss'

const cx = classNames.bind(style)

export const LessonFour = () => {
  const [isHide, toogle] = useBoolean(true)

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleToggleModal = (index: number) => {
    toogle()
    isHide && setCurrentIndex(index)
  }

  const handleSwitchImage = (offset: number) => {
    setCurrentIndex((prev) => prev + offset)
  }
  return (
    <div className={cx('main')}>
      <ul className={cx('image__list')}>
        {images?.length > 0 &&
          images?.map((image, index) => (
            <li key={image.id} className={cx('image__item')} onClick={() => handleToggleModal(index)}>
              <img src={image.url} alt={image.url} />
            </li>
          ))}
      </ul>
      <div className={cx('modal', isHide ? '' : 'modal__show')}>
        <span className={cx('modal__icon', 'modal__close')} onClick={() => handleToggleModal(0)}>
          <FaTimes />
        </span>
        <div className={cx('modal__content')}>
          {currentIndex > 0 && (
            <span className={cx('modal__icon', 'modal__left')} onClick={() => handleSwitchImage(-1)}>
              <FaChevronLeft />
            </span>
          )}
          <img className={cx('modal__image')} src={images[currentIndex].url} alt='' />
          {currentIndex < images.length - 1 && (
            <span className={cx('modal__icon', 'modal__right')} onClick={() => handleSwitchImage(1)}>
              <FaChevronRight />
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
