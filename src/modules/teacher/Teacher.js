import { BasicPage } from "../utils/BasicPage";
import { API_CLIENT } from "../../shared/services/api_client";
import { useState, useRef } from "react";

export const Teacher = () => {
    const nameValue = useRef("")
    const onClickAdd = () => {
        console.log("Add running")
        API_CLIENT.post("/login",
            { name: nameValue }
        ).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
    }
    const onClickDelete = () => {

        console.log("Delete running")
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