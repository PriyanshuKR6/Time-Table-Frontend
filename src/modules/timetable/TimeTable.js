import { BasicPage } from "../utils/BasicPage";
import { useState } from "react";
import { API_CLIENT } from "../../shared/services/api_client";
import { API } from "../../config/app-constants";
import { Token } from "../../shared/services/Token";
import { DynamicTable } from "../../shared/widgets/DynamicTable";
export const TimeTable = () => {
    const [periodValue, setPeriodValue] = useState("");
    const [daysValue, setDaysValue] = useState("");
    const [classValue, setClassValue] = useState("");
    const [renderFlag, setRenderFlag] = useState(false);
    const [result, setResult] = useState({});

    const onClickAdd = async () => {
        console.log("Add running");
    }
    const onClickRender = async () => {
        const result = await API_CLIENT.post(API.TIMETABLE.CREATE, {
            'periods': periodValue,
            'days': daysValue.split(","),
            'classs': classValue,
            'userid': Token.getToken(),

        }).then(res => {
            setResult(res.data.result);
            setRenderFlag(true);
        }).catch(err => {
            console.log(err);
        })

    }

    const parameters = [
        { text: "periods", type: "number", handler: setPeriodValue },
        { text: "days", type: "text", handler: setDaysValue },
        { text: "class", type: "text", handler: setClassValue }]  //entries
    return (<>
        <BasicPage
            name="Time-Table"
            entry={parameters}
            onClickAdd={onClickAdd}
            onClickRender={onClickRender}
            renderAddFlag={false}        // flag for conditinal rendering of add button
            renderBtnFlag={true}         // flag for conditinal rendering between delete button & show button
        />
        {renderFlag && <DynamicTable data={result} class={classValue} />}
    </>);
}