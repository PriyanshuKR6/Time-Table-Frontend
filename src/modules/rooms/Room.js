
import { BasicPage } from "../utils/BasicPage";
import { useState, useRef, useEffect } from "react";
import { API_CLIENT } from "../../shared/services/api_client";




export const Room = () => {
    const [nameValue, setNameValue] = useState("");
    const [capValue, setCapValue] = useState("");
    const [tags, setTags] = useState("")
    useEffect(() => {
        console.log(nameValue, capValue, tags);
    });
    const onClickAdd = () => {
        console.log("Add running")
        API_CLIENT.post("/login",
            { userid: nameValue, capacity: capValue, tags:tags }
        ).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
    }
    const onClickDelete = () => {

        console.log("Delete running")
    }



    const parameters = [{ text: "name", type: "text", handler: setNameValue },
    { text: "capacity", type: "number", handler: setCapValue },
    { text: "tags", type: "text", handler: setTags }]                    //entries
    return (<>
        <BasicPage
            name="Room"
            entry={parameters}
            onClickAdd={onClickAdd}
            onClickDelete={onClickDelete}


        />
    </>);
}