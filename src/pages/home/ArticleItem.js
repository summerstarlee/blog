/**
 * Created by starlee on 2020/09/28.
 */
import React from 'react'
import style from './article.module.scss'

export default props => {
  const handleDetail = () => {
    props.history.push(`/detail/${props.id}`)
  }

  return (
    <section onClick={handleDetail} className={style.article}>
      <div className={style.title}>{props.title}</div>
      <div>{props.context}</div>
    </section>
  )
}
