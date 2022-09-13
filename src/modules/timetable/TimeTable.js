import { BasicPage } from "../utils/BasicPage";
import { useState } from "react";
import { API_CLIENT } from "../../shared/services/api_client";
import { API } from "../../config/app-constants";
import { Token } from "../../shared/services/Token";
import { DynamicTable } from "../../shared/widgets/DynamicTable";
export const TimeTable = () => {
    const [periodValue, setPeriodValue] = useState("");
    const [daysValue, setDaysValue] = useState("");
    const [renderFlag, setRenderFlag] = useState(false);
    const [result, setResult] = useState({});

    const onClickAdd = async () => {
        console.log("Add running");


    }
    const onClickRender = async () => {
        const result = await API_CLIENT.post(API.TIMETABLE.CREATE, {
            'periods': periodValue,
            'days': daysValue.split(","),
            'userid': Token.getToken(),

        }).then(res => {
            console.log(res.data.result);
            setResult(res.data.result);
            setRenderFlag(true);
        }).catch(err => {
            console.log(err);
        })
    
    }

    const parameters = [{ text: "periods", type: "number", handler: setPeriodValue },
    { text: "days", type: "text", handler: setDaysValue }]                    //entries
    return (<>
        <BasicPage
            name="TimeTable"
            entry={parameters}
            onClickAdd={onClickAdd}
            onClickRender={onClickRender}
            renderBtnFlag={true}
        />
        {renderFlag && <DynamicTable data={result} />}
    </>);
}