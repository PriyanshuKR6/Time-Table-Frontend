import { BasicPage } from "../utils/BasicPage";
import { API_CLIENT } from "../../shared/services/api_client";

import { useState, useEffect } from "react";

export const Subject = () => {
    const [nameValue, setNameValue] = useState("");
    const [tags, setTags] = useState("")
    useEffect(() => {
        console.log(nameValue, tags);
    });
    const onClickAdd = () => {
        console.log("Add running")
        API_CLIENT.post("/login",
            { userid: nameValue, tags: tags }
        ).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
    }
    const onClickDelete = () => {

        console.log("Delete running")
    }



    const parameters = [{ text: "name", type: "text", handler: setNameValue }, { text: "tags", type: "text", handler: setTags }];//entries
    return (<>
        <BasicPage
            name="Subject"
            entry={parameters}
            onClickAdd={onClickAdd}
            onClickDelete={onClickDelete}
        />
    </>);

}