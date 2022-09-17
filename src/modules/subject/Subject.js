import { BasicPage } from "../utils/BasicPage";
import { API_CLIENT } from "../../shared/services/api_client";
import { Token } from '../../shared/services/Token'
import { useState } from "react";
import { API } from "../../config/app-constants";

export const Subject = () => {
    const [nameValue, setNameValue] = useState("");
    const [teacher, setTeacher] = useState("");
    const [classes, setClasses] = useState("");
    const [cycle, setCycle] = useState("");
    const [message, setMessage] = useState('');


    const onClickAdd = async () => {
        console.log("Add running");
        const result = await API_CLIENT.post(API.SUBJECT.ADD, {
            'name': nameValue,
            'userid': Token.getToken(),
            'class': classes,
            'teacher': teacher,
            'cycle': cycle
        })
        setMessage(result.data.message);
        console.log(message);

    }
    const onClickDelete = async () => {

        console.log("Delete running")
        const result = await API_CLIENT.post(API.SUBJECT.DELETE, {
            'name': nameValue,
            'userid': Token.getToken(),
            'class': classes,
            'teacher': teacher,
            'cycle': cycle
        })
        setMessage(result.data.message);
        console.log(message);
    }


    const parameters = [{ text: "name", type: "text", handler: setNameValue },
    { text: "teacher", type: "text", handler: setTeacher },
    { text: "class", type: "text", handler: setClasses },
    { text: "cycle", type: "text", handler: setCycle }];//entries
    return (<>
        <BasicPage
            name="Subject"
            entry={parameters}
            renderAddFlag={true}
            onClickAdd={onClickAdd}
            onClickDelete={onClickDelete}
        />
    </>);
}