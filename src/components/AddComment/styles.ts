import styled from "styled-components";
import { setLightness } from "polished";

export const Container = styled.div`
  width: 100%;
  min-height: 70px;
  background: var(--neutral-white);
  border-radius: var(--border-radius);
  padding: var(--comment-padding);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .avatar {
    width: 100%;
    max-width: 45px;
    height: 45px;
  }

  .comment-area {
    width: 100%;
    margin: 0 15px;
    border-radius: 10px;
    border-color: var(--neutral-light-gray);
    padding: 14px 20px;
    font-size: 1rem;
    color: var(--neutral-dark-blue);

    &::placeholder {
      font-size: 1rem;
      color: var(--neutral-grayish-blue);
      font-weight: 400;
    }
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
