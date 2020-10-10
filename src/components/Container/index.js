/**
 * Created by starlee on 2020/09/28.
 */
import React from 'react'
import style from './index.module.css'

const Container = props => {
  return <div className={style.container}>{props.children}</div>
}

export default Container
