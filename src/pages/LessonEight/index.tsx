import { Link } from 'react-router-dom'

import { useForm } from 'react-hook-form'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import classNames from 'classnames/bind'

import { CustomInput } from '@/components'

import style from './LessonEight.module.scss'

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  email: yup.string().required('Email is required'),
  password: yup.string().required('Password is required'),
  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password')], 'Password must match')
})

const cx = classNames.bind(style)

export const LessonEight = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const handleRegister = (data) => {
    console.log(data)
  }

  return (
    <div className={cx('main')}>
      <div className={cx('container')}>
        <h1 className={cx('title')}>Register</h1>
        <form action='' className={cx('form__container')} onSubmit={handleSubmit(handleRegister)}>
          <CustomInput type='text' register={register} placeholder='Username' error={errors.username} />
          <CustomInput type='email' register={register} placeholder='Email' error={errors.email} />
          <CustomInput
            type='password'
            register={register}
            placeholder='Password'
            error={errors.password}
          />
          <CustomInput
            type='password'
            register={register}
            placeholder='Confirm password'
            error={errors.confirmPassword}
          />
          <button type='submit' className={cx('form__submit')}>
            Login
          </button>
          <div className={cx('form__link')}>
            Not a member? <Link to='#'>Signup</Link>
          </div>
        </form>
      </div>
    </div>
  )
}
