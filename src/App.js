import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './modules/user/pages/Login';
// import { Register } from './modules/user/pages/Register';
// import { Table } from './shared/widgets/Table';
// import { Homepage } from './shared/widgets/Homepage';
// import { BuildingPopup } from './modules/builidng/components/BuildingPopup';
// import { BuildingAdder } from './modules/builidng/components/BuildingAdder';
// import { DashBoard } from './modules/user/pages/Dashboard';
// import { Experimental_CssVarsProvider } from '@mui/material';
// function App() {
//   return (<>
//     {/* <BrowserRouter> */}
//     {/* <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//       </Routes> */}
//     {/* <DashBoard />
//     </BrowserRouter> */}
//     {/* <Table/> */}
//     {/* <Homepage/> */}
//     {/* <BuildingAdder/> */}
//     {/* <Register/> */}

//     {/* <BrowserRouter>*/}
//     {/* </BrowserRouter>  */}


//   </>
//   );
// }

// export default App;

import { CssVarsProvider } from '@mui/joy/styles';
import Button from '@mui/joy/Button';
import { DashBoard } from './modules/user/pages/Dashboard';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabsVariants from './test';
import { Register } from './modules/user/pages/Register';
import { DynamicTable } from './shared/widgets/DynamicTable';

function App() {
  const data = [
    {"fruit": "Apple", "cost": 100},
    {"fruit": "Orange", "cost": 50},
    {"fruit": "Banana", "cost": 35},
    {"fruit": "Mango", "cost": 70},
    {"fruit": "Pineapple", "cost": 45},
    {"fruit": "Papaya", "cost": 40},
    {"fruit": "Watermelon", "cost": 35}
    ]
  return (
    <BrowserRouter>
      <DashBoard/>
      <Routes>
        <Route path='/dashboard' element={<DashBoard/>}/>   
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
    // <DynamicTable data={data}/>
  );
}

export default App;
