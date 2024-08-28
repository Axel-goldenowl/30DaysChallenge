import { useState } from 'react'

import { FaTimes } from 'react-icons/fa'

import classNames from 'classnames/bind'

import style from './LessonThree.module.scss'

const cx = classNames.bind(style)

export const LessonThree = () => {
  const [isHide, setIsHide] = useState(true)
  const handleToggleModal = () => {
    setIsHide((prev) => !prev)
  }
  return (
    <div className={cx('main')}>
      <div className={cx('modal', isHide ? 'hide' : '')}>
        <div className={cx('modal__content')}>
          <section className={cx('modal__header')}>
            <p>Welcome to Nodemy</p>
            <button className={cx('modal__btn-exit')} onClick={handleToggleModal}>
              <FaTimes />
            </button>
          </section>
          <section className={cx('modal__body')}>
            <h2 className={cx('modal__title')}>Modal</h2>
            <p className={cx('modal__msg')}>Đây là phần body của modal</p>
            <button className={cx('modal__btn-close')} onClick={handleToggleModal}>
              Close
            </button>
          </section>
        </div>
      </div>
      <button className={cx('modal__btn-open')} onClick={handleToggleModal}>
        Open Modal
      </button>
    </div>
  )
}
