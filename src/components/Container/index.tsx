import { MainContainer } from "./styles";

// components
import Comment from "../Comment";
import AddComment from "../AddComment";

// assets
import julioSomoAvatar from "../../img/avatars/image-juliusomo.webp";

const Container = (): JSX.Element => {
  return (
    <MainContainer>
      <Comment avatar={julioSomoAvatar} username="juliosomo" />
      <AddComment avatar={julioSomoAvatar} username="juliosomo" />
    </MainContainer>
  );
};

export default Container;
