// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './Login';
import { Register } from './Regsiter';
import { Table } from './Table';

function App() {
  return (<>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter> */}
    <Table/>
  </>
  );
}

export default App;
