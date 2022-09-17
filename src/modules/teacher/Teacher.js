import { BasicPage } from "../utils/BasicPage";
import { API_CLIENT } from "../../shared/services/api_client";
import { useState } from "react";
import { API } from "../../config/app-constants";
import { Token } from "../../shared/services/Token";

export const Teacher = () => {
    const [nameValue, setNameValue] = useState("");
    const [message, setMessage] = useState('');

    const onClickAdd = async () => {
        console.log("Add running");
        const result = await API_CLIENT.post(API.TEACHER.ADD, {
            'name': nameValue,
            'userid': Token.getToken()

        }).then(res => {
            console.log(res.data);
            setMessage(result.data.message);
            console.log(message);
        }).catch(err => {
            console.log(err);
        })
    }
    const onClickDelete = async () => {
        console.log("Delete running");
        const result = await API_CLIENT.post(API.TEACHER.DELETE, {
            'name': nameValue,
            'userid': Token.getToken()
        })
        setMessage(result.data.message);
        console.log(message);
    }

    const parameters = [{ text: "name", type: "text", handler:setNameValue }];//entries
    return (<>
        <BasicPage
            name="Teacher"
            entry={parameters}
            renderAddFlag={true} 
            onClickAdd={onClickAdd}
            onClickDelete={onClickDelete}
            
        />
    </>);

}