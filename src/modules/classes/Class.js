import { BasicPage } from "../utils/BasicPage";
import { useState } from "react";
import { API_CLIENT } from "../../shared/services/api_client";
import { API } from "../../config/app-constants";
import { Token } from "../../shared/services/Token";

export const Class = () => {
    const [nameValue, setNameValue] = useState("");
    const [strValue, setStrValue] = useState("");
    const [message, setMessage] = useState("");
    const onClickAdd = async () => {
        const result = await API_CLIENT.post(API.CLASS.ADD, {
            'name':  nameValue,
            'userid': Token.getToken(),
            'strength':  strValue 

        }).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
  
    }
    const onClickDelete = async () => {

        console.log("Delete running")
        const result = await API_CLIENT.post(API.CLASS.DELETE, {
            'name':  nameValue ,
            'userid': Token.getToken(),
            'strength':  strValue 
        })
        setMessage(result.data.message);
        console.log(message);
    }

    const parameters = [{ text: "name", type: "text", handler: setNameValue },
    { text: "strength", type: "number", handler: setStrValue }];//entries
    return (<>
        <BasicPage
            name="Class"
            entry={parameters}
            onClickAdd={onClickAdd}
            onClickDelete={onClickDelete}   
        />
    </>);
}