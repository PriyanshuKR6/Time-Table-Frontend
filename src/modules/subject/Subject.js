import { BasicPage } from "../utils/BasicPage";

import { useState, useRef, useEffect } from "react";

export const Subject = () => {
    const [nameValue, setNameValue] = useState("");
    const [tags, setTags] = useState("")
    useEffect(() => {
        console.log(nameValue, tags);
    });


    const parameters = [{ text: "name", type: "text", handler: setNameValue }, { text: "tags", type: "text", handler: setTags }];//entries
    return (<>
        <BasicPage
            name="Subject"
            entry={parameters}
        />
    </>);

}