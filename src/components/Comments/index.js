import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {commentList: [], name: '', comment: '', count: 0}

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const initialBackgroundColorClassName = `${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      date: new Date(),
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
      count: prevState.count + 1,
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onDeleteComment = id => {
    const {commentList} = this.state
    const filteredList = commentList.filter(eachList => eachList.id !== id)

    this.setState(prevState => ({
      commentList: [...filteredList],
      count: prevState.count - 1,
    }))
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(each => {
        if (id === each.id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  render() {
    const {commentList, name, comment, count} = this.state

    return (
      <div className="background-container">
        <div className="comments-container">
          <div>
            <h1 className="app-heading">Comments</h1>
            <form onSubmit={this.onAddComment}>
              <p>Say something about 4.0 Technologies</p>
              <input
                type="text"
                className="input-value"
                value={name}
                placeholder="Your Name"
                onChange={this.onChangeName}
              />
              <br />
              <textarea
                rows="4"
                cols="50"
                className="textarea-size"
                placeholder="Your Comment"
                onChange={this.onChangeComment}
                value={comment}
              />
              <br />
              <button type="submit">Add Comment</button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
              alt="comments"
              className="comments-image"
            />
          </div>
        </div>
        <hr />
        <div className="comments-container">
          <h1 className="comments-heading">
            <span className="span-container">{count}</span>Comments
          </h1>
        </div>
        <ul className="list-item-container">
          {commentList.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              commentDetails={eachComment}
              deleteComment={this.onDeleteComment}
              toggleIsLiked={this.toggleIsLiked}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
