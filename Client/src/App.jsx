// Import UI
import Navbar from "./components/basic_ui/Navbar";
import Sidebar from "./components/basic_ui/Sidebar";

// Import dependencies
import { Toaster, toast } from 'sonner'

// Import Routing
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Task from "./pages/Task";
import Home from "./pages/Home"

function App() {
  return (
    <>
      <BrowserRouter>
      <Toaster richColors/>
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Task />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
