import { Navbar } from "../../../shared/widgets/Navbar"
import { Routes, Route } from 'react-router-dom';
import { Login } from "./Login";
import { Register } from "./Register";
import { Class } from "../../classes/Class";
import { Room } from "../../rooms/Room";
import { Teacher } from "../../teacher/Teacher";
import { Subject } from "../../subject/Subject";
export const DashBoard = () => {
    // const [category, setCategory] = useState([]);
    // const getMenuData = () => {
    //     Category=menus;
    // }
    const category = [{ name: "Class", url: "/class" },
    { name: "Room", url: "/room" },
    { name: "Teacher", url: "/teacher" },
    { name: "Subject", url: "/subject" }];
    return (
        <>
            <Navbar category={category} />
            {/* <hr /> */}
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/class" element={<Class/>} />
                <Route path="/room" element={<Room />} />
                <Route path="/teacher" element={<Teacher />} />
                <Route path="/subject" element={<Subject />} />
            </Routes>
            {/* <InputField/> */}
        </>
    )
}