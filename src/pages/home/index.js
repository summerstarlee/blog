import React from 'react'
import ArticleItem from './ArticleItem'
import style from './index.module.css'

export default ({ history }) => {
  const artcleList = [
    {
      id: 1,
      title: '1',
      context: '111'
    },
    {
      id: 2,
      title: '2',
      context: '222'
    }
  ]

  return (
    <div className={style.articleContainer}>
      {artcleList.map(article => (
        <ArticleItem history={history} {...article} key={article.title} />
      ))}
    </div>
  )
}
