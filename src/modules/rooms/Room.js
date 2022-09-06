
import { BasicPage } from "../utils/BasicPage";
import { useState, useRef, useEffect } from "react";



export const Room = () => {
    const [nameValue, setNameValue] = useState("");
    const [strValue, setStrValue] = useState("");
    const [tags, setTags] = useState("")
    useEffect (()=>{
        console.log(nameValue, strValue,tags);
    });
    

    const parameters = [{ text: "name", type: "text", handler:  setNameValue  },
    { text: "strength", type: "number", handler:  setStrValue  },
    { text: "tags", type: "text", handler:  setTags  }]                    //entries
    return (<>
        <BasicPage
            name="Room"
            entry={parameters}
            
        />
    </>);
}