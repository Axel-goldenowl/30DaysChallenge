import { useState } from 'react'

import classNames from 'classnames/bind'

import { AiOutlineClose } from 'react-icons/ai'

import style from './LessonTen.module.scss'

const cx = classNames.bind(style)

export const LessonTen = () => {
  const [tags, setTags] = useState(['nodejs', 'reactjs'])

  const handleAddTag = (e) => {
    if (e.key !== 'Enter') {
      return
    } else {
      const tag = e.target.value.trim()
      if (tag && !tags.includes(tag)) {
        setTags((prevTags) => [...prevTags, tag])
      }
    }
    e.target.value = ''
  }

  const handleRemoveTag = (tag: string) => () => {
    setTags((prevTags) => prevTags.filter((currTag) => currTag !== tag))
  }
  
  const handleRemoveAllTags = () => {
    setTags([])
  }

  return (
    <div className={cx('main')}>
      <div className={cx('container')}>
        <h2 className={cx('title')}>Search Tags</h2>
        <div className={cx('tag__container')}>
          {tags?.length > 0 && (
            <ul className={cx('tag__list')}>
              {tags.map((tag) => (
                <li key={tag} className={cx('tag__item')}>
                  {tag}
                  <AiOutlineClose className={cx('tag__icon')} onClick={handleRemoveTag(tag)} />
                </li>
              ))}
            </ul>
          )}
          <input type='text' className={cx('form__input')} placeholder='Type and enter' onKeyUp={handleAddTag} />
        </div>
        <button className={cx('form__btn')} onClick={handleRemoveAllTags}>
          Remove All
        </button>
      </div>
    </div>
  )
}
