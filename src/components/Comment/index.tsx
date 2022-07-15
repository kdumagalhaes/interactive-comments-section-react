import { MainContainer } from "./styles";

interface CommentProps {
  avatar?: string;
  username?: string;
}

const Comment = ({ avatar, username }: CommentProps): JSX.Element => {
  const commentContent = localStorage.getItem("comment");
  return (
    <MainContainer>
      <div className="flex-row">
        <img className="desktop-avatar" src={avatar} alt={username} />
        <span className="username">{username}</span>
        <span className="comment-date">1 hour ago</span>
        <button className="delete">
          <img src="" alt="delete comment" className="delete-icon" />
          <span className="delete-text">Delete</span>
        </button>
        <button className="edit">
          <img src="" alt="edit comment" className="edit-icon" />
          <span className="edit-text">Edit</span>
        </button>
      </div>
      <div className="comment-content">{commentContent}</div>
    </MainContainer>
  );
};

export default Comment;
