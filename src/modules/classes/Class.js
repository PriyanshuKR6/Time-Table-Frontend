import { BasicPage } from "../utils/BasicPage";

import { useState, useRef, useEffect } from "react";
import { API_CLIENT } from "../../shared/services/api_client";
import api from "../../shared/services/api";

export const Class = () => {
    const [nameValue, setNameValue] = useState("");
    const [strValue, setStrValue] = useState("");
    // const [state, setState] = useState("");
    useEffect(() => {
        console.log(nameValue, strValue);
    });
    const onClickAdd = () => {
        console.log("Add running")
        API_CLIENT.post("/login",
        {userid:nameValue,password:strValue}
        ).then(res=>{
            console.log(res.data);
        }).catch(err=>{
            console.log(err);
        })
    }
    const onClickDelete = () => {
        
        console.log("Delete running")
    }

    const parameters = [{ text: "name", type: "text", handler: setNameValue }, { text: "capacity", type: "number", handler: setStrValue }];//entries
    return (<>
        <BasicPage
            name="Class"
            entry={parameters}
            onClickAdd={onClickAdd}
            onClickDelete={onClickDelete}
        // onChange={handleChange}
        />
    </>);
}