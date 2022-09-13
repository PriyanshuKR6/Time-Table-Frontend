

export const DynamicTable = (props) => {
    const data = props.data;
    console.log(data);
    // const getKeys = () => {
    //     return Object.keys(data[0]);
    // }

    const getHeader = () => {
        // const keys = getKeys();
        for (let i = 0; i < data.days.length; i++) {
            return (<>
                {/* {keys.map((key, index) => {
                return <th key={key}>{key.toUpperCase()}</th>
            })} */}
                <th>{data.days[i].toUpperCase()}</th>
            </>)
        }
    }
    const getRowsData = () => {
        return (<>
            {/* for (let j = 0; j < data.periods; j++) { */}
            {[...Array(data.periods)].map((z, j) => {
                return (
                    <tr>
                        {[...Array(data.days.length)].map((x, i) => {
                            return (
                                [...Array(data.rooms.length)].map((y, k) => {
                                    if (data.grid[i][j][k] !== -1) {
                                        return (
                                            <td>
                                                data.subjects[grid[i][j][k]];
                                                data.rooms[k];
                                            </td>
                                        )
                                    }
                                    return (<></>)
                                }))
                        })

                        }</tr>)
            })}
        </>);
    }

    // const RenderRow = () => {

    // }
    // const getRowsData = () => {
    //     const keys = getKeys();
    //     return data.map((row, index) => {
    //         return <tr key={index}><RenderRow key={index} data={row} keys={keys} /></tr>
    //     })
    // }
    // const RenderRow = (props) => {
    //     return props.keys.map((key, index) => {
    //         return <td className="table-entry" key={props.data[key]}>{props.data[key]}</td>
    //     })
    // }
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