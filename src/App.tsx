import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./components";
import SameDateTodoList from "./components/SameDateTodo/SameDateTodo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/todoListByDate/:date" element={<SameDateTodoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
