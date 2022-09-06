import { BasicPage } from "../utils/BasicPage";

import { useState, useRef } from "react";

export const Teacher = () => {
    const nameValue = useRef("")
    const [state, setState] = useState("")
    const handleChange = (e) => {
        if (e.target.type === "text") {
            nameValue.current = e.target.value;
            setState(state + 1);
        }
    }
    const parameters = [{ text: "name", type: "text", value: { nameValue } }];//entries
    return (<>
        <BasicPage
            name="Teacher"
            entry={parameters}
            onChange={handleChange}
        />
    </>);

}