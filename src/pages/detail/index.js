import React from 'react'

export default ({ match }) => {
  console.log('match', match)
  return <div>详情页面 {match.params.id}</div>
}
