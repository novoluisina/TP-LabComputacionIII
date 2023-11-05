import React from 'react'
import CardComment from '../cardComment/CardComment'
import './CommentList.css'

const CommentList = ({ comments }) => {
  return (
    <div className='CommentListContainer'>
      {comments.map(({ id, text }) => {
        return <CardComment key={id} textComment={text} />
      })}
    </div>
  )
}

export default CommentList
