import React from 'react'

import { iInputProps } from '@/interfaces'

import className from 'classnames/bind'

import style from './CustomInput.module.scss'

const cx = className.bind(style)

export const CustomInput: React.FC<iInputProps> = ({ name, type, placeholder, register, error }) => {
  return (
    <div className={cx('form__control', error ? 'form__control-error' : '')}>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={cx('form__input')}
      />
      <span></span>
      {error && <p className={cx('form__error')}>{error.message}</p>}
    </div>
  )
}
