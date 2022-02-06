import React, { useState } from "react";

// assets
import { Container } from "./styles";
import julioSomoAvatar from "../../img/avatars/image-juliusomo.webp";

const AddComment = (): JSX.Element => {
  const [commentContent, setCommentContent] = useState<string>("");

  const buttonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(commentContent);
    localStorage.setItem("commment", JSON.stringify(commentContent));
  };

  return (
    <Container>
      <img src={julioSomoAvatar} alt="Julio Somo" className="avatar" />
      <textarea
        name="comment-area"
        id="comment-area"
        cols={30}
        rows={5}
        className="comment-area"
        placeholder="Add a comment..."
        onChange={(e) => setCommentContent(e.target.value)}
        value={commentContent}
      />
      <button onClick={buttonHandler} className="send-button">
        Send
      </button>
    </Container>
  );
};

export default AddComment;
