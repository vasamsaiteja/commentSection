// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails, deleteComment, toggleIsLiked} = props
  const {id, name, comment, isLiked, date, initialClassName} = commentDetails

  const onClickDeleteIcon = () => {
    deleteComment(id)
  }

  const firstLetter = name.slice(0, 1)

  const LikedImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const LikedText = isLiked ? 'like-paragraph' : 'unlike-paragraph'

  const postedTime = formatDistanceToNow(date)

  const onClickLikeIcon = () => {
    toggleIsLiked(id)
  }

  return (
    <li className="comment-section">
      <div className="heading-container ">
        <h1 className={`first-letter ${initialClassName}`}>{firstLetter}</h1>
        <p className="name-paragraph">{name}</p>
        <p className="posted-paragraph">{postedTime} ago</p>
      </div>
      <p className="comment-paragraph">{comment}</p>
      <div className="bottom-container">
        <div className="like-container">
          <button
            type="button"
            className="delete-button"
            onClick={onClickLikeIcon}
          >
            <img src={LikedImage} alt="like" className="image-icon" />
          </button>
          <p className={LikedText}>Like</p>
        </div>
        <button
          type="button"
          className="delete-button"
          testid="delete"
          onClick={onClickDeleteIcon}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="image-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
