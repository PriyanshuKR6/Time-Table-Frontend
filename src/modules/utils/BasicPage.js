import { Header } from "../../shared/widgets/Header"

export const BasicPage = (props) => {
    return (<>
        <div className="input-template">
            <Header text={props.name} />
            <form onSubmit={(e) => { e.preventDefault() }} className="input-field-form">
                {props.entry.map((c, index) => {
                    return (
                        <div className="tab-input-fields" key={index}>
                            <span><p>{c.text}</p></span>
                            <span><input
                                type={c.type}
                                placeholder={"Enter " + c.text}
                                onChange={(e) => {
                                    c.handler(e.target.value);
                                }}
                                required />
                            </span>
                        </div>)
                })}
                {
                    (props.renderAddFlag) ?
                        <button className="btn" onClick={props.onClickAdd}>Add</button>
                        :
                        null
                }
                {
                    (props.renderBtnFlag) ?
                        <button className="btn" onClick={props.onClickRender}>Show Table</button>
                        :
                        <button className="btn" onClick={props.onClickDelete}>Delete</button>
                }
            </form>
        </div>
    </>)
}