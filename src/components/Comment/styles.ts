import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  min-height: 70px;
  background: var(--neutral-white);
  border-radius: var(--border-radius);
  margin: 20px 0;
  padding: 24px;

  .top-row,
  .flex-row {
    display: flex;
    align-items: center;
  }

  .top-row {
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .desktop-avatar {
    width: 100%;
    max-width: 40px;
    height: 40px;
  }

  .username {
    font-weight: 500;
  }

  .desktop-avatar,
  .comment-time,
  .username {
    margin-right: 15px;
  }

  .btn {
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    font-weight: 500;
    margin: 0 10px;
    font-size: 1em;
    opacity: 1;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.5;
    }
  }

  .delete {
    color: var(--primary-soft-red);
  }

  .edit {
    color: var(--primary-moderate-blue);
  }

  .icon {
    margin-right: 5px;
  }

  .comment-content {
    color: var(--neutral-grayish-blue);
    line-height: 1.4rem;
    font-weight: 400;
  }

  .comment-time {
    color: var(--neutral-grayish-blue);
  }

  .username {
    color: var(--neutral-dark-blue);
  }
`;
