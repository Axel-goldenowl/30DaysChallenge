import className from 'classnames/bind'

import style from './CustomButton.module.scss'

const cx = className.bind(style)

export const CustomButton = ({ title }) => {
  return <button className={cx('button')}>{title}</button>
}
