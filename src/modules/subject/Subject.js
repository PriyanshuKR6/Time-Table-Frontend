import { BasicPage } from "../utils/BasicPage";
import { API_CLIENT } from "../../shared/services/api_client";

import { useState, useEffect } from "react";

export const Subject = () => {
    const [nameValue, setNameValue] = useState("");
    const [teacher, setTeacher] = useState("");
    const [classes, setClasses] = useState("");
    const [tags, setTags] = useState("");
    const [cycle, setCycle] = useState("");
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



    const parameters = [{ text: "name", type: "text", handler: setNameValue },
    { text: "teacher", type: "text", handler: setTags },
    { text: "class", type: "text", handler:setClasses},
    { text: "tags", type: "text" ,handler:setTags},
    { text: "cycle", type: "text",handler:setCycle }];//entries
    return (<>
        <BasicPage
            name="Subject"
            entry={parameters}
            onClickAdd={onClickAdd}
            onClickDelete={onClickDelete}
        />
    </>);

}