import React from 'react'

import { IInputProps } from '@/interfaces'

import className from 'classnames/bind'

import style from './CustomInput.module.scss'

const cx = className.bind(style)

export const CustomInput: React.FC<IInputProps> = ({ name, type, placeholder, register, error }) => {
  return (
    <div className={cx('form__control', { 'form__control-error': error })}>
      <input
        id={name}
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
