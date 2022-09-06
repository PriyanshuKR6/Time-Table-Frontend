import { BuildingAdder } from "../../modules/builidng/components/BuildingAdder.js"
import { Table } from "./Table.js"

export const Homepage = () => {
    return(<>
        {/* <aside className="add-section">
        <BuildingAdder/>
        </aside> */}
        
        <div className="main-content">
            <Table/>
        </div>
    </>)
}