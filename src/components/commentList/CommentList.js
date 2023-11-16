import React from 'react'
import CardComment from '../cardComment/CardComment'
import './CommentList.css'

const CommentList = ({ comments, setComments }) => {
  return (
    <div className='CommentListContainer'>
      {comments.map(({ id, text, userId }) => {
        return (
          <CardComment
            key={id}
            textComment={text}
            userId={userId}
            commentId={id}
            setComments={setComments}
          />
        )
      })}
    </div>
  )
}

export default CommentList
