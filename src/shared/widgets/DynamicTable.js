
export const DynamicTable = (props) => {
    const getKeys = () => {
        return Object.keys(props.data[0]);
    }

    const getHeader = () => {
        const keys = getKeys();
        return (<>
            {keys.map((key, index) => {
                return <th key={key}>{key.toUpperCase()}</th>
            })}
        </>)
    }

    const getRowsData = () => {
        const items = props.data;
        const keys = getKeys();
        return items.map((row, index) => {
            return <tr key={index}><RenderRow key={index} data={row} keys={keys} /></tr>
        })
    }
    const RenderRow = (props) => {
        return props.keys.map((key, index) => {
            return <td className="table-entry" key={props.data[key]}>{props.data[key]}</td>
        })
    }
    return (<>
        <table className="time-table">
            <thead>
                <tr className="week-days">
                    {getHeader()}
                </tr>
            </thead>
            <tbody>
                {getRowsData()}
            </tbody>
        </table>
    </>);
}