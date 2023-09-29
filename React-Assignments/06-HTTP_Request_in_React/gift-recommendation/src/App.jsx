import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home/Home";

function App() {
  const [result, setResult] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<h1>Result Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
