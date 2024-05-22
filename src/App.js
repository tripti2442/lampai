import './App.css';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Blank from './components/Blank';
import Right from './components/Right';
import Practicepage from './components/Practicepage';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Topbar />
      <BrowserRouter>
        <div className="flex h-[90vh]">
          <Navbar />
          <div className="flex-1 ">
            <Routes>
              <Route path="/blank" element={<Blank />} />
              <Route path="/practice" element={<Practicepage />} />
              
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
