import { Home } from "./pages/Home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Layout } from "./styles/Layout";
import { GlobalStyle } from "./styles/styles";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
