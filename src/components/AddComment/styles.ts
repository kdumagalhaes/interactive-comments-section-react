import styled from "styled-components";
import { setLightness } from "polished";

export const MainContainer = styled.div`
  .mobile-container,
  .desktop-container {
    width: 100%;
    min-height: 70px;
    background: var(--neutral-white);
    border-radius: var(--border-radius);
  }

  .mobile-container {
    display: none;
    padding: 16px;

    @media (max-width: 480px) {
      display: block;
    }
  }

  .desktop-container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 24px;

    @media (max-width: 480px) {
      display: none;
    }
  }

  .flex-hor {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .desktop-avatar,
  .mobile-avatar {
    width: 100%;
  }

  .desktop-avatar {
    max-width: 45px;
    height: 45px;
  }

  .mobile-avatar {
    max-width: 35px;
    height: 35px;
  }

  .mobile-comment-area,
  .desktop-comment-area {
    width: 100%;
    border-radius: 10px;
    padding: 14px 20px;
    border-color: var(--neutral-light-gray);
    font-size: 1rem;
    color: var(--neutral-dark-blue);

    &::placeholder {
      font-size: 1rem;
      color: var(--neutral-grayish-blue);
      font-weight: 400;
    }
  }

  .desktop-comment-area {
    width: 100%;
    margin: 0 15px;
    border-radius: 10px;
    border-color: var(--neutral-light-gray);
    font-size: 1rem;
    color: var(--neutral-dark-blue);
  }

  .mobile-comment-area {
    margin-bottom: 10px;
  }

  .send-button {
    padding: 13px 28px;
    background: var(--primary-moderate-blue);
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    color: var(--neutral-white);
    text-transform: uppercase;
    transition: background 0.2s;

    &:hover {
      background: ${setLightness(0.8, "hsl(238, 40%, 52%)")};
    }
  }
`;
