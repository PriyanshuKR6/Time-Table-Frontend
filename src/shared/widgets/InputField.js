export const InputField = (props) => {
    return (<>
        <div className="input-template">
            <h2>ADD {props.name}</h2>
            <form className="input-field-form">
                <div className="tab-input-fields">
                    <span><p>Name</p></span>
                    <span><input
                        type="text"
                        // value={idValue.current}
                        placeholder="Enter Name"
                        // onChange={handleChange}
                        required />
                    </span>
                </div>
                <div className="tab-input-fields">
                    <span><p>Capacity</p></span>
                    <span>
                        <input
                            type="number"
                            // value={pwdValue.current}
                            placeholder="Enter Capacity"
                            // onChange={handleChange}
                            required />
                    </span>
                </div>
                {/* <input type="submit" value="{props.functionality}" onClick={doLogin} /> */}
                <input type="submit" value="Add" />
            </form>
        </div>
    </>);
}