import { Routes, Route } from "react-router-dom";  // ✅ Only import Routes & Route
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { CreateNote } from "./components/CreateNote";
import { Notes } from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>}/> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createnote" element={<CreateNote />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </>
  );
}

export default App;
