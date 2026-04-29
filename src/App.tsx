import { BrowserRouter, Routes, Route } from "react-router-dom";

import  SignIn  from "./features/auth/signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
                                                                                                                                                                                                                                                                                
