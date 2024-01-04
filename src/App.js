import { Route , Routes } from "react-router-dom";
import React from "react";
import RegistrationPage from './Components/RegistrationPage';
import Genres from './Components/Genres';
import Main from "./Components/Main";
import Movies from "./Components/Movies";

function App() {
  return (
    <>
     <Routes>
     <Route path="/" element={<RegistrationPage />} />
     <Route path="/genres" element={<Genres />} />
     <Route path="/main" element={<Main />} />
     <Route path="/movies" element={<Movies />} />
     </Routes>
    </>
  );
}

export default App;
