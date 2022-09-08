
const data = [
    { "fruit": "Apple", "cost": 100 },
    { "fruit": "Orange", "cost": 50 },
    { "fruit": "Banana", "cost": 35 },
    { "fruit": "Mango", "cost": 70 },
    { "fruit": "Pineapple", "cost": 45 },
    { "fruit": "Papaya", "cost": 40 },
    { "fruit": "Watermelon", "cost": 35 }
]

export const DynamicTable = () => {
    const getKeys = () => {
        return Object.keys(data[0]);
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
        const keys = getKeys();
        return data.map((row, index) => {
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
            <tbody className="table-body">
                {getRowsData()}
            </tbody>
        </table>
    </>);
}