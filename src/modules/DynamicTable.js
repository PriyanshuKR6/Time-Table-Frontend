const data = [
  {
    Days: "1",
    Monday: "Maths (105)",
    Tuesday: "English (206)",
    Wednesday: "Science(304)",
    Thursday: "Social Studies (505)",
    Friday: "Sports (Ground)",
  },
  {
    Days: "2",
    Monday: "Maths (305)",
    Tuesday: "English (404)",
    Wednesday: "Science(304)",
    Thursday: "Social Studies (505)",
    Friday: "Sports (Ground)",
  },
  {
    Days: "3",
    Monday: "Maths (105)",
    Tuesday: "English (206)",
    Wednesday: "Science(304)",
    Thursday: "Social Studies (505)",
    Friday: "Sports (Ground)",
  },
  {
    Days: "4",
    Monday: "Maths (105)",
    Tuesday: "English (206)",
    Wednesday: "Science(304)",
    Thursday: "Social Studies (505)",
    Friday: "Sports (Ground)",
  },
  {
    Days: "5",
    Monday: "Maths (105)",
    Tuesday: "English (206)",
    Wednesday: "Science(304)",
    Thursday: "Social Studies (505)",
    Friday: "Sports (Ground)",
  },
  {
    Days: "6",
    Monday: "Maths (105)",
    Tuesday: "English (206)",
    Wednesday: "Science(304)",
    Thursday: "Social Studies (505)",
    Friday: "Sports (Ground)",
  },
  {
    Days: "7",
    Monday: "Maths (105)",
    Tuesday: "English (206)",
    Wednesday: "Science(304)",
    Thursday: "Social Studies (505)",
    Friday: "Sports (Ground)",
  },
];

export const DynamicTable = () => {
  const getKeys = () => {
    return Object.keys(data[0]);
  };

  const getHeader = () => {
    const keys = getKeys();
    return (
      <>
        {keys.map((key, index) => {
          return <th key={key}>{key.toUpperCase()}</th>;
        })}
      </>
    );
  };

  const getRowsData = () => {
    const keys = getKeys();
    return data.map((row, index) => {
      return (
        <tr key={index}>
          <RenderRow key={index} data={row} keys={keys} />
        </tr>
      );
    });
  };
  const RenderRow = (props) => {
    return props.keys.map((key, index) => {
      return (
        <td className="table-entry" key={props.data[key]}>
          {props.data[key]}
        </td>
      );
    });
  };
  return (
    <>
      <table className="time-table">
        <thead>
          <tr className="week-days">{getHeader()}</tr>
        </thead>
        <tbody className="table-body">{getRowsData()}</tbody>
      </table>
    </>
  );
};
