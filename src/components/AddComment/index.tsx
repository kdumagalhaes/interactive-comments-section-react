import { useState } from "react";

// assets
import { MainContainer } from "./styles";
interface AddCommentProps {
  avatar?: string;
  username?: string;
}

const AddComment = ({ avatar, username }: AddCommentProps): JSX.Element => {
  const [commentContent, setCommentContent] = useState<string>("");

  const saveCommentInLocalStorage = (): void => {
    if (commentContent === "") {
      return;
    }
    localStorage.setItem("comment", JSON.stringify(commentContent));
  };

  return (
    <>
      <MainContainer>
        <div className="desktop-container">
          {avatar !== undefined && (
            <img src={avatar} alt={username} className="desktop-avatar" />
          )}
          <textarea
            name="comment-area"
            id="comment-area"
            cols={30}
            rows={5}
            className="desktop-comment-area"
            placeholder="Add a comment..."
            onChange={(e) => setCommentContent(e.target.value)}
            value={commentContent}
          />
          <button onClick={saveCommentInLocalStorage} className="send-button">
            Send
          </button>
        </div>

        <div className="mobile-container">
          <textarea
            name="comment-area"
            id="comment-area"
            cols={30}
            rows={5}
            className="mobile-comment-area"
            placeholder="Add a comment..."
            onChange={(e) => setCommentContent(e.target.value)}
            value={commentContent}
          />
          <div className="flex-hor">
            {avatar !== undefined && (
              <img src={avatar} alt={username} className="mobile-avatar" />
            )}
            <button onClick={saveCommentInLocalStorage} className="send-button">
              Send
            </button>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default AddComment;
