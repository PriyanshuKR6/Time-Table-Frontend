import { Navbar } from "../../../shared/widgets/Navbar"
import { Outlet } from 'react-router-dom';

export const DashBoard = () => {
    const category = [{ name: "Class", url: "/dashboard/class" },
    { name: "Room", url: "/dashboard/room" },
    { name: "Teacher", url: "/dashboard/teacher" },
    { name: "Subject", url: "/dashboard/subject" },
    { name: "TimeTable", url: "/dashboard/timetable" }];
    return (
        <>
            <Navbar category={category} />
            <hr />
            <Outlet />
        </>
    )
}