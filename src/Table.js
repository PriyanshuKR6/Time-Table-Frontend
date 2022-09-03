
import { TableBody } from "./TableBody"

export const Table = () => {
    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return (<>
        <div>
            <table className="time-table">
                <thead>
                    <tr className="week-days">
                        <th className="diagonal">
                            <div>
                                <span className="top">Period</span>
                                <span className="bottom">Days</span>
                                <div className="line"></div>
                            </div>
                        </th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th rowSpan="8" className="lunch">Break</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                    </tr>
                </thead>
                <tbody>
                    <TableBody day={"Monday"}/>
                    <TableBody day={"Tuesday"}/>
                    <TableBody day={"Wednesday"}/>
                    <TableBody day={"Thursday"}/>
                    <TableBody day={"Friday"}/>
                    <TableBody day={"Saturday"}/>

                </tbody>
            </table>
        </div>
    </>);
}