import logo from "./logo.svg";
import "./App.css";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
  Navigate,
} from "react-router-dom";
import HomePage from "./views/HomePage/HomePage";
import CreatePage from "./views/CreatePage/CreatePage";
import UpdatePage from "./views/UpdatePage/UpdatePage";










function App() {
  return (
    <div className="App">
       <h1>Favorite authors</h1>
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<Navigate replace to="/authors"  />} />  {/* redirection */}
           <Route path="/authors" element={<HomePage />} />
           <Route path="/authors/new" element={<CreatePage />} />
           <Route path="/authors/edit/:id" element={<UpdatePage />}/>
         </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
