import './App.css';
import { Login } from './modules/user/pages/Login';
import { DashBoard } from './modules/user/pages/Dashboard';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Register } from './modules/user/pages/Register';
import { DynamicTable } from './shared/widgets/DynamicTable';
import { Class } from './modules/classes/Class';
import { Subject } from './modules/subject/Subject';
import { Teacher } from './modules/teacher/Teacher';
import { Room } from './modules/rooms/Room';
import { TimeTable } from './modules/timetable/TimeTable';
 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='dashboard' element={<DashBoard />} >
          <Route path="" element={<Class />} />
          <Route path="class" element={<Class />} />
          <Route path="room" element={<Room />} />
          <Route path="teacher" element={<Teacher />} />
          <Route path="subject" element={<Subject />} />
          <Route path="timetable" element={<TimeTable/>} />
        </Route>
          <Route path="table" element={<DynamicTable />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
