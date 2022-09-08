import { BasicPage } from "../utils/BasicPage";
import { API_CLIENT } from "../../shared/services/api_client";
import { useState, useRef } from "react";
import { API } from "../../config/app-constants";
import { Token } from "../../shared/services/Token";

export const Teacher = () => {
    const nameValue = useRef("");
    const [message, setMessage] = useState('');

    const onClickAdd = async () => {
        console.log("Add running");
        const result = await API_CLIENT.post(API.TEACHER.ADD, {
            'name': nameValue,
            'userid': Token.getToken()

        }).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
        setMessage(result.data.message);
        console.log(message);
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

    const parameters = [{ text: "name", type: "text", value: { nameValue } }];//entries
    return (<>
        <BasicPage
            name="Teacher"
            entry={parameters}
            onClickAdd={onClickAdd}
            onClickDelete={onClickDelete}
        />
    </>);

}