import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./components";
import SameDateTodo from "./components/SameDateTodo/SameDateTodo";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/todoListByDate/:date" element={<SameDateTodo />} />
    </Routes>
  </BrowserRouter>
);

export default App;
