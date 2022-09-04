
export const TableBody = (props) => {
    const style = {
        border : "none"
    };
    return (<>
        <tr className="table-body">
            <th className="period"><div>{props.day}</div></th>
            <td><a href="/" className="table-entry">1</a></td>
            <td><a href="/" className="table-entry">1</a></td>
            <td><a href="/" className="table-entry">1</a></td>
            <td><a href="/" className="table-entry">1</a></td>
            <td style={style}></td>
            <td><a href="/" className="table-entry">1</a></td>
            <td><a href="/" className="table-entry">1</a></td>
            <td><a href="/" className="table-entry">1</a></td>
            <td><a href="/" className="table-entry">1</a></td>
        </tr>
    </>)
}