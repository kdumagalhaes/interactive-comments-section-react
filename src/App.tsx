// components
import AddComment from "./components/AddComment";

// assets
import { GlobalStyles } from "./css/global";
import julioSomoAvatar from "./img/avatars/image-juliusomo.webp";

const App = () => {
  return (
    <>
      <AddComment avatar={julioSomoAvatar} username="juliosomo" />
      <GlobalStyles />
    </>
  );
};

export default App;
