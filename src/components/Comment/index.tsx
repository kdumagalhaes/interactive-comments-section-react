import { MainContainer } from "./styles";

// assets
import deleteIcon from "../../img/icons/icon-delete.svg";
import editIcon from "../../img/icons/icon-edit.svg";
import { useEffect, useState } from "react";

interface CommentProps {
  avatar?: string;
  username?: string;
}

const Comment = ({ avatar, username }: CommentProps): JSX.Element => {
  return (
    <MainContainer>
      <div className="top-row">
        <div className="flex-row">
          <img className="desktop-avatar" src={avatar} alt={username} />
          <span className="username">{username}</span>
          <span className="comment-time">1 hour ago</span>
        </div>
        <div className="flex-row">
          <button className="btn delete">
            <img src={deleteIcon} alt="delete comment" className="icon" />
            <span className="delete-text">Delete</span>
          </button>
          <button className="btn edit">
            <img src={editIcon} alt="edit comment" className="icon" />
            <span className="edit-text">Edit</span>
          </button>
        </div>
      </div>
      <p className="comment-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </MainContainer>
  );
};

export default Comment;
