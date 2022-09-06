// // import logo from './logo.svg';
// import { CssVarsProvider } from '@mui/joy/styles';

// import Button from '@mui/material/Button';
import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Login } from './modules/user/pages/Login';
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

//     {/* export default function MyApp() { */}
//     <CssVarsProvider>
//     <Button >Solid</Button>
//     <Button variant="contained" color='danger'>Soft</Button>
//     <Button variant="outlined" >Outlined</Button>
//     <Button variant="plain">Plain</Button>
//     <Button size="md" variant= 'solid' color="success">
//           Success
//         </Button>
//         </CssVarsProvider>
//   </>
//   );
// }

// export default App;

import { CssVarsProvider } from '@mui/joy/styles';
import Button from '@mui/joy/Button';
import { DashBoard } from './modules/user/pages/Dashboard';
import { BrowserRouter } from 'react-router-dom';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabsVariants from './test';

function App() {
  return (
    <BrowserRouter>
    {/* <CssVarsProvider> */}
    {/* <TabsVariants/> */}
    <DashBoard/>
    {/* </CssVarsProvider> */}
    </BrowserRouter>
  );
}

export default App;
