export const InputField = (props) => {
    return (<>
        <div className="input-template">
            <h2>ADD {props.name}</h2>
            <form className="input-field-form">
                <div className="tab-input-fields">
                    <span><p>Name</p></span>
                    <span><input
                        type="text"
                        placeholder="Enter Name"
                        required />
                    </span>
                </div>
                <div className="tab-input-fields">
                    <span><p>Capacity</p></span>
                    <span>
                        <input
                            type="number"
                            placeholder="Enter Capacity"
                            required />
                    </span>
                </div>
                <input type="submit" value="Add" />
            </form>
        </div>
    </>);
}