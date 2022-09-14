export const DynamicTable = (props) => {
  const data = props.data;
  // const getKeys = () => {
  //     return Object.keys(data[0]);
  // }
  console.log(data);
  const getHeader = () => {
    // const keys = getKeys();
    const arr = [];
    for (let i = 0; i < data.days.length; i++) {
      arr.push(<th key={i}>{data.days[i].toUpperCase()}</th>);
    }
    arr.unshift(<th key={-1}>Periods</th>);
    return arr;
  };

  let index = 0;
  let rows = [];
  for (let j = 0; j < data.periods; j++) {
      let colm = [];
      for (let i = 0; i < data.days.length; i++) {
        let flag = false;
      for (let k = 0; k < data.rooms.length; k++) {
        if(data.grid[i][j][k] !== -1 ){
        if (data.subjects[data.grid[i][j][k]].class === props.class.toUpperCase) {
          colm.push(
            <td className="table-entry" key={index++}>
              subject: {data.subjects[data.grid[i][j][k]].name}
              <br/>
              class: {data.subjects[data.grid[i][j][k]].class}&nbsp;
              <br/>
              teacher: {data.subjects[data.grid[i][j][k]].teacher}&nbsp;
              <br/>
              room: {data.rooms[k]}
            </td>
          );
          flag = true;
          break;
        }}
        
    }
    if(flag === false){
          colm.push(<td className="table-entry" key={index++}></td>);

      }
    }
    colm.unshift(<td className="table-entry">{j + 1}</td>);
    rows.push(<tr key={index++}>{colm}</tr>);
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
  return (
    <>
      <table className="time-table">
        <thead>
          <tr className="week-days">{getHeader()}</tr>
        </thead>
        <tbody className="table-body">{rows}</tbody>
      </table>
    </>
  );
};
