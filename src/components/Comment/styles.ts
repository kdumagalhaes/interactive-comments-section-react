import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  min-height: 70px;
  background: var(--neutral-white);
  border-radius: var(--border-radius);
  margin: 20px 0;
  padding: 24px;
  position: relative;

  .top-row,
  .flex-row {
    display: flex;
    align-items: center;
  }

  .top-row {
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .desktop-btns {
    @media (max-width: 480px) {
      display: none;
    }
  }

  .mobile-btn-menu {
    background-color: var(--neutral-light-gray);
    border: none;
    border-radius: 5px;
    padding: 10px;
    display: none;

    @media (max-width: 480px) {
      display: block;
    }
  }

  .mobile-menu {
    position: absolute;
    right: 25px;
    top: 70px;
    width: 150px;
    height: 100px;
    background-color: var(--neutral-very-light-gray);
    border-radius: 10px;
    padding: 10px;
    display: none;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
  }

  .expanded {
    display: flex;
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
