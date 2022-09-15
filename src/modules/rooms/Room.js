
import { BasicPage } from "../utils/BasicPage";
import { useState } from "react";
import { API_CLIENT } from "../../shared/services/api_client";
import { API } from "../../config/app-constants";
import { Token } from "../../shared/services/Token";



export const Room = () => {
    const [nameValue, setNameValue] = useState("");
    const [capValue, setCapValue] = useState("");
    const [message, setMessage] = useState('');

    const onClickAdd = async () => {
        console.log("Add running");
        const result = await API_CLIENT.post(API.ROOM.ADD, {
            'name': nameValue,
            'capacity': capValue,
            'userid': Token.getToken(),

        }).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })

    }
    const onClickDelete = async () => {

        console.log("Delete running")
        const result = await API_CLIENT.post(API.ROOM.DELETE, {
            'name': nameValue,
            'capacity': capValue,
            'userid': Token.getToken(),
        })
        setMessage(result.data.message);
        console.log(message);
    }


    const parameters = [{ text: "name", type: "text", handler: setNameValue },
    { text: "capacity", type: "number", handler: setCapValue }]                    //entries
    return (<>
        <BasicPage
            name="Room"
            entry={parameters}
            renderAddFlag={true} 
            onClickAdd={onClickAdd}
            onClickDelete={onClickDelete}
            
        />
    </>);
}