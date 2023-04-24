import { Header } from "./components";
import { Home } from "./pages/Home/Home";
import { GlobalStyle } from "./styles/styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
    </>
  );
}

export default App;
