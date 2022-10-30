import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/Page/HomePage";
import ResumePage from "./Components/Page/ResumePage";
import NotFound from "./Components/Page/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="myresume" element={<ResumePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
