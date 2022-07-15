// components
import AddComment from "./components/AddComment";
import Comment from "./components/Comment";

// assets
import { GlobalStyles } from "./css/global";
import julioSomoAvatar from "./img/avatars/image-juliusomo.webp";

const App = () => {
  return (
    <>
      <Comment avatar={julioSomoAvatar} username="juliosomo" />
      <AddComment avatar={julioSomoAvatar} username="juliosomo" />
      <GlobalStyles />
    </>
  );
};

export default App;
