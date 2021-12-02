import "./App.css";
import Header from "./Components/Header/Header";

import { Route, Routes } from "react-router-dom";
import Main from "./Pages/Main/Main";
function App() {
  return (
    <>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Main />}>
            {/* <Main></Main> */}
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
